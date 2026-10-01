# Michel Deosaran — Toronto After Dark

An Astro portfolio presented as a game-style interface. The landing screen uses a left-aligned main menu; selecting a section replaces it with a full-width archive, profile, or arcade screen. The original coursework, education, community records, and published journal content remain available.

## Run locally

Use Node.js 20.19+ (or a compatible newer version) and pnpm 10.11.0.

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm build
pnpm preview
```

GitHub Pages builds and deploys pushes to `main` through `.github/workflows/deploy.yml`. The configured site URL is `https://md-info.github.io`.

## Interface

- Landing menu: Up/Down arrows, Enter, pointer, or touch.
- Portfolio sections: full-width screens, a Main Menu control, and Escape to return.
- Projects: category filters and native accessible dossier dialogs. Escape closes a dialog before returning to the menu.
- Settings: optional synthesized menu sound (off by default), ambient motion, and photography credits. Settings persist locally when storage is available.
- Night Run: an original three-lane browser arcade. Left/Right or A/D steer, Space pauses, and Escape ends a run. Touch controls are included. The game pauses when the tab is hidden; best scores stay on the visitor's device.

## Content and assets

- Project data: `src/content/projects/*.json`
- Coursework: `src/content/courses/*.json`
- Journal: `src/content/blog/*.md`; drafts are excluded from both listings and generated routes.
- Shared shell: `src/layouts/Layout.astro`
- Interface styling: `src/styles/night-city.css`
- Interaction scripts: `src/scripts/interface.ts` and `src/scripts/night-run.ts`

The backgrounds are actual Toronto night photographs with slow CSS panning and crossfades, a light rain overlay, and restrained color grading. They are not video footage. Sources and the Unsplash license are documented in `public/images/README.md` and the Settings dialog. Typography uses Barlow Condensed, Rajdhani, and IBM Plex Mono from Google Fonts, with system fallbacks.

The interface draws inspiration from science-fiction game menus while using Michel's own identity. Night Run is independent original gameplay, not an embedded commercial game.
