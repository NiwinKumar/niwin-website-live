import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { JSDOM } from 'jsdom';
import sharp from 'sharp';

const site = fileURLToPath(new URL('../www.niwin.info/', import.meta.url));
const references = [];
async function inspectDirectory(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      await inspectDirectory(file);
      continue;
    }
    if (!/\.(html|css)$/.test(file)) continue;
    const text = await readFile(file, 'utf8');
    if (file.endsWith('.html')) {
      const document = new JSDOM(text).window.document;
      for (const element of document.querySelectorAll('img[src], link[rel="icon"][href]')) {
        references.push({ file, url: element.getAttribute('src') || element.getAttribute('href') });
      }
    } else {
      for (const match of text.matchAll(/url\(\s*["']?([^\s)'"\n]+)["']?\s*\)/g)) {
        references.push({ file, url: match[1] });
      }
    }
  }
}
await inspectDirectory(site);
const checked = new Set();
const failures = [];
for (const { file, url } of references) {
  if (/^(https?:|\/\/)/.test(url)) continue;
  const embedded = url.startsWith('data:');
  const target = embedded ? url : url.startsWith('/') ? path.join(site, url) : path.resolve(path.dirname(file), url);
  if (checked.has(target)) continue;
  checked.add(target);
  try {
    if (embedded) {
      const comma = url.indexOf(',');
      const data = url.slice(comma + 1);
      await sharp(url.slice(0, comma).includes(';base64') ? Buffer.from(data, 'base64') : Buffer.from(decodeURIComponent(data))).metadata();
    } else {
      await sharp(target).metadata();
    }
  } catch {
    failures.push(`${path.relative(site, file)}: ${embedded ? 'invalid embedded image' : url}`);
  }
}
if (failures.length) {
  throw new Error(`Unreadable image references:\n${failures.join('\n')}`);
}
console.log(`Image check passed: ${checked.size} unique local or embedded images referenced by HTML and CSS.`);
