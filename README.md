# Pubky Community Call Template

A reusable browser presentation for Pubky community calls, built with reveal.js,
HTML, CSS, and SVG. `main` contains the template; the original presentation is
preserved on the `community-call-4` branch.

The template includes ten editable slides: welcome, agenda, updates, resources,
metrics, presenter, guest, image, roadmap, and thanks. It retains the Pubky
branding, local fonts, background motifs, and animated cover mark.

## Start a new call

Start from an up-to-date template and create a branch for the call:

```sh
git switch main
git pull --ff-only
git switch -c community-call-N
```

Replace `N` with the call number. Save or commit any existing work before switching
branches. Make the event-specific edits on the new branch so `main` remains reusable.

Replace the `[placeholders]` in `web/index.html`, including the document title and
metadata, call number, date, agenda, slide text, links, image descriptions, captions,
and `<aside class="notes">` speaker notes. Replace sample figures with verified
numbers and include their source and measurement date. Use links appropriate to
the new call and remove any unused slides or sections.

Duplicate an existing `<section>` to reuse its layout. Give every slide a unique
`id` so Reveal's hash links continue to identify the correct slide. Review the
presentation and notes before sharing or deploying it.

## Run locally

Requires Node.js **22.12 or newer** and npm.

```sh
npm ci
npm run dev
```

Open **http://localhost:4322**. The server listens on the local machine only.

For a production build:

```sh
npm run build
npm run preview
```

Stop the development server before starting the preview: both use port 4322.
The generated presentation and license notices are in `dist/`. Serve that
directory with a static HTTP server to present the built deck.

## Edit the design

| File | Purpose |
| --- | --- |
| `web/index.html` | Slide order, content, images, metadata, and speaker notes |
| `web/styles.css` | Typography, spacing, and reusable layouts |
| `web/backgrounds.css` | Local background motifs and display opacity |
| `web/main.js` | Reveal settings and plugins |
| `web/image-viewer.js`, `web/image-viewer.css` | Screenshot zoom and scrolling |
| `web/assets/` | Bundled fonts, logos, artwork, and image placeholders |

Reuse the classes on the example slides:

| Layout | Classes and structure |
| --- | --- |
| Four topics | `.content-grid` containing `.content-item` blocks; used by agenda, updates, and roadmap |
| Resources | `.resources-slide` with four resource sections |
| Metrics | `.metrics-slide` with two figures and a flow diagram |
| Presenter | `.presenter-slide` with a square `<img class="presenter-art">` |
| Guest | `.presenter-slide.landscape-art` with a landscape `<img class="presenter-art">` |
| Screenshot | `.image-slide` with an image-viewer button marked `data-image-viewer` |
| Closing | `.closing` |

Copy the complete example markup when reusing a layout, especially the image-viewer
button and its accessibility attributes. Replace placeholder artwork with suitable
images, update their `alt` text, dimensions, and captions, and retain the intended
aspect ratio. Replace all `https://example.com/` links with the actual destinations.
Keep the `?no-inline` suffix on image-viewer image paths so even small images are
built as local files that the viewer can open.

The deck uses near-black, white, and lime with the bundled Inter Tight font. Keep
the shared logo placement, title spacing, and background layers when changing
content. Use sentence case for headings, while preserving proper names and
acronyms. Capitalize “Homeserver” and “Homeservers” in prose; keep repository names
and URLs unchanged.

The cover's animated mark loops even when reduced-motion settings disable slide
transitions. Static PDF exports do not retain its animation. Fonts, artwork,
styles, and presentation code are served locally; external links open when clicked.

## Present and export

| Key | Action |
| --- | --- |
| Right arrow / Space | Next slide |
| Left arrow | Previous slide |
| Esc | Slide overview |
| F | Fullscreen |
| S | Speaker notes and presenter view |
| ? | Keyboard shortcuts |

Click the example screenshot to open its image viewer. Use **−**, **+**, **100%**,
and **Fit** to adjust its size, then scroll to inspect details. **Esc** or **Close**
returns to the slide. Slide-navigation keys are disabled while the viewer is open.

**Speaker notes are public.** They are included in both the source and the built
presentation. Keep notes suitable for publication, including additions made during
rehearsal.

To export a PDF, open `http://localhost:4322/?print-pdf` in Chromium or Chrome,
then print to PDF with landscape orientation, background graphics enabled,
and no margins. Check the exported pages before sharing.

## Deploy to Vercel

The repository root is the Vercel project root. `vercel.json` configures the
Vite build and publishes `dist/`; Reveal's hash-based navigation needs no rewrites.
`.vercelignore` limits uploads to the public slide source and build inputs.

After linking the project with the Vercel CLI, deploy the selected call branch
with `vercel --prod`.

Keep private references and extraction working files in the ignored `references/`
directory. Copy only assets intended for publication into `web/assets/`, and
update [BRANDING.md](BRANDING.md) when adding assets with separate ownership or
usage terms. Do not copy complete reference documents, credentials, or private
notes into `web/` or `dist/`. Ignore rules do not prevent a forced `git add -f`.

## License

Except for the branding, artwork, and source composition reproductions identified
in [BRANDING.md](BRANDING.md), this repository's original slide content and source
code are licensed under the [MIT License](LICENSE).

Those excluded materials, including reproductions embedded in slides and exported
presentations, remain subject to their respective owners' rights. No trademark
rights are granted. Treat retained artwork as separately licensed assets when
reusing the template.

See [BRANDING.md](BRANDING.md) for the asset inventory and separate usage terms,
and [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) for the bundled Inter Tight
font's SIL Open Font License and software dependency notices.
