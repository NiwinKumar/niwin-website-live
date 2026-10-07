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

## Personal content

Work and the home timeline use facts supplied in `Niwin_Kumar_Resume (1).pdf`: HappyFox experience, two engineering projects, education, and skills. Metrics are from the resume, not independently audited. The supplied resume was read locally; the PDF and phone number are not published in this repository.

People currently shows the two supported work and learning circles, HappyFox and VIT Chennai. Named profiles should be added only with Niwin’s own notes.

Writing contains only “you never know what stays with someone,” supplied by Niwin, dated October 1, 2026. Its original URL is linked without tracking or share tokens. The editorial copy is in `content/you-never-know-what-stays-with-someone.md`; the public article is in `www.niwin.info/writing/index.html`.

The homepage timeline data is editable in `www.niwin.info/assets/content-H5xKOsW4.js`. Work, People, and Writing are semantic HTML pages styled by `assets/personal-content.css`; `assets/personal-pages.js` retains shared navigation and footer effects. Borrowed profiles, project narratives, essays, and their absent `/uploads/` references have been removed.

## Remaining assets

The previous image audit found 32 corrupt legacy image files. The replacement Work, People, and Writing content does not use those files; original homepage illustration assets still need attention. The shared effects bundle also references absent `client-QfQKsH9N.js`; this pre-existing optional React sound-provider import can report a console error without preventing these content pages from rendering.

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
