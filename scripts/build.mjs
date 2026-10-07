import { cp, rm } from 'node:fs/promises';

const source = new URL('../www.niwin.info/', import.meta.url);
const output = new URL('../dist/', import.meta.url);

await rm(output, { recursive: true, force: true });
if (!process.argv.includes('--clean')) {
  await cp(source, output, { recursive: true });
  console.log('Built Niwin portfolio in dist/');
}
