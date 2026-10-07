# Niwin Kumar Portfolio

Personal website for Niwin Kumar at https://niwin.info.

## Run locally

Use Node.js 24 (verified) and npm:

```sh
npm ci
npm run dev
```

Open http://localhost:3000. No Gemini key, AI Studio account, or environment file is required for the website.

## Edit and build

The website served by `server.js` lives in `www.niwin.info/`:

- `index.html`: home page
- `work/index.html`, `people/index.html`, `writing/index.html`: other pages
- `assets/`: local scripts, styles, images, and videos

These are exported static files, including bundled JavaScript. The placeholder React files in `src/` are not used by the current dev or build commands. Editing them will not update the website.

```sh
npm run check
npm run build
```

Build replaces `dist/` with a fresh copy of the website; deploy that folder to a static host. `npm run clean` removes only `dist/`. The local server serves `www.niwin.info/` with `dist/` as a fallback; `npm run preview` runs the same server.

All website files are local except Google Fonts, the decorative video at `theme-switch.pages.dev`, and the bundled Vercel Analytics integration. External portfolio and social links are navigation destinations.

## Content to review

Some exported project descriptions and collaborator links still need a personal content review. There are 106 references to absent `/uploads/` media files in the bundled portfolio data; those assets need to be supplied or the corresponding content removed. A local image audit also found 32 pre-existing corrupt PNG/GIF/WebP files; these need original assets restored. The signature was recovered from the valid copy embedded in the home page. Do not invent project history or substitute unrelated media.

## Git

The configured remote uses the personal SSH alias:

```sh
git@github-personal:NiwinKumar/niwin-website-live.git
```

Unlock the personal key when necessary:

```sh
/usr/bin/ssh-add --apple-use-keychain ~/.ssh/id_ed25519_personal
```

Then use normal `git pull --ff-only`, commit, and push commands.
