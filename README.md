# Pubky Community Call Slides

A 16-slide rough draft for **Pubky Community Call #4**, Wednesday,
**7 October 2026 at 16:00 UTC**. Built with reveal.js, HTML, CSS, and SVG for
presenting in a browser. Slide text, layouts, diagrams, and speaker notes are
editable source files.

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

## Deploy to Vercel

The repository root is the Vercel project root. `vercel.json` configures the
Vite build and publishes `dist/`; Reveal's hash-based navigation needs no rewrites.
`.vercelignore` allows only the public slide source and build inputs to upload.
Private references, review artifacts, local credentials, and Vercel account
metadata remain outside Git and deployments.

After linking the project with the Vercel CLI, deploy with `vercel --prod`.

## Present

| Key | Action |
| --- | --- |
| Right arrow / Space | Next slide |
| Left arrow | Previous slide |
| Esc | Slide overview |
| F | Fullscreen |
| S | Speaker notes and presenter view |
| ? | Keyboard shortcuts |

Click the Nexus Scout screenshot to open its image viewer. Use **−**, **+**, **100%**,
and **Fit** to adjust the size, then scroll to inspect details. **Esc** or **Close**
returns to the slide. Slide-navigation keys are disabled while the viewer is open.

Speaker notes are included in the public source and built presentation. Keep
them suitable for publication, including notes added during rehearsal.

To export a PDF, open `http://localhost:4322/?print-pdf` in Chromium or Chrome,
then print to PDF with landscape orientation, background graphics enabled,
and no margins. Check the exported pages before sharing.

## Edit the deck

- `web/index.html`: slide order, content, illustrations, and `<aside class="notes">` speaker notes.
- `web/styles.css`: typography, spacing, and reusable layouts.
- `web/backgrounds.css`: subtle local background motifs and display opacity.
- `web/main.js`: reveal.js settings and plugins.
- `web/image-viewer.js` and `web/image-viewer.css`: accessible screenshot zoom and scrolling.
- `web/assets/`: locally bundled fonts, official logos, and original PowerPoint PNG/GIF artwork.

The design uses the [official Synonym/Pubky brand guidance](https://synonym.to/brand-guidelines)
for near-black, white, and lime. Inter Tight matches the
[Pubky app's font configuration](https://github.com/pubky/pubky-app/blob/dev/src/app/globals.css).

The 50 original PowerPoint artwork files remain available. The SDK retains its
full source composition, with its geometry and layer order on a 1600 × 900 canvas,
standalone source logos omitted, and native shapes reproduced in CSS. Partial
motifs from source slides 1, 12, 13, 20, 24, and 30 form subtle backgrounds.
Rings, orbital rings, floating shards, triangles, lattice, and top outlines join
the official pubky.org square outlines for seven motif families. PowerPoint
elements retain their original geometry except for the resized, repositioned
triangle and glow on iroh-blobs and outline arcs on the closing slide. Collections
uses a larger square-outline variant.
Neighbouring slides use different background patterns, except for the two
self-hosting slides, which deliberately share the same quiet lattice background.
These static layers sit behind the content and ignore pointer events; the two
screenshot slides keep plain backgrounds. The whole slide scales to fit the viewport.
The former developer-resource, Collections, PKARR, Loopky, roadmap, Questions, and closing illustrations are retained as
source assets. Pubky Docs and The next chapter use four text sections; Collections
uses the supplied illustration of cards grouped into topic folders. Rüdiger's guest slide uses
the supplied landscape illustration of iroh laptops exchanging file blocks, alongside
the same title and presenter typography as the other presenter slides:
his name in muted 48-pixel type, followed by the smaller “Guest speaker – iroh” line.
The previous-call link remains below this introduction.
The self-hosting slide introduces running Pubky on Umbrel with
“Self-sovereignty from your living room. Host your Pubky data on Umbrel.”
The Self-hosting guides slide repeats the preceding slide's supplied home-server illustration.
A prominent repository path links to the docs directory above an equally styled bullet list
of the INSTALL.md, DEPLOY.md, and deploy/cloudflare-tunnel.md guides.
The closing slide (`#thanks`) pairs the deliberately fictional quotation
“Cypherpunks prompt LLMs” and attribution “— Aristotle (probably), c. 350 BCE”
with the supplied illustration of a person entering a glowing keyhole gateway.
The lime links form a compact row beneath the attribution: pubky.app first, then
a muted middle dot and pubky.org. Its speaker notes explicitly identify the attribution as a joke.
Image bytes remain unchanged. Background opacity is adjusted only at display time,
including the SDK composition at 45% opacity; foreground artwork keeps its original appearance.
All 15 slides after the cover use the same official full Pubky SVG logo,
132 × 44 pixels at x1308, y80 (160 pixels from the right edge), matching the
regular titles' left margin while sitting in a separate header above them.
The cover keeps its larger full logo.
Regular slides use a shared title position at x160, y160 and 100-pixel type,
with single-line titles wherever they fit comfortably. Collections, self-hosting,
the self-hosting guide, and PKARR use full-width title areas with content below.
Slide titles, section headings, subtitles, and agenda labels use sentence case:
capitalize the first word, proper names, and acronyms. Preserve project names,
the official event name, and exact titles of referenced talks.
The cover retains its deliberately different composition. The closing quotation
uses two intentional lines of 92-pixel type at the shared title position, with
a muted 28-pixel attribution beneath it.
Agent skills uses a single-line linked title with Jay's name on the left and the
supplied square robot illustration on the right, displayed without cropping at
640 × 640 pixels. Loopky follows the same layout with João and the supplied
transparent flashcard illustration. Collections, both self-hosting slides, and
PKARR use 620 × 620 pixel illustrations. Brief descriptions introduce Agent skills,
Collections, PKARR, and Loopky; public source links are in the slides or speaker notes.
The two screenshot slides use smaller titles above enlarged image areas, preserving
the shared logo placement. Their PNGs retain the supplied pixels and aspect ratio.

The cover places the full logo, two-line title, and date on the left, with the
original-size animated mark on the right. The GIF loops every 5.04 seconds as a
visible motion cue during the stream.
It intentionally keeps playing when reduced-motion settings disable slide
transitions. Its nearly black background is blended with CSS rather than removed
from the original file. Static PDF exports do not retain this animation.

Fonts, artwork, styles, and presentation code are served locally; external links
open only when clicked.
The presentation uses keyboard navigation without on-screen controls or a
progress bar.

## Draft status and private references

The running order comes from the supplied planning PDF and includes guest speaker
Rüdiger Klaehn from iroh on “Iroh content discovery — Using Mainline and PKARR,”
immediately after Andrei's PKARR segment. The existing `#/iroh-blobs` link is retained.
This is an initial
agenda deck with segment introductions; presenter demos, timings, and detailed
talking points still need finalization. The SDK slide presents v0.14.0 and the
main changes since v0.6.0, with introduction-version labels and primary sources
in its speaker notes. Experimental private storage is labeled explicitly, and
the reliability section distinguishes SDK changes from homeserver improvements.
Its four topics use the same two-column grid as the Agenda slide.
Version labels and storage paths share a monospace font stack (Courier New,
Liberation Mono, then the browser's monospace fallback).
Nexus Scout has its own slide emphasizing the LLM workflow and documentation link,
with two measured percentages captured on 7 October 2026: replies beyond current
follow lists and the share of directed follows that are mutual. Absolute network
counts are omitted from the slide and notes; raw responses remain in ignored artifacts.
Exact Cypher queries, parameters, timestamps, scope, and documentation links
are in its speaker notes; the presentation does not make live API requests.
A second Nexus Scout slide presents the supplied query screenshot with an optional
full-resolution viewer. A static conference image slide follows “The next chapter.”
Pubky Docs uses four sections: Agent-friendly, Developer guide, Refined documentation,
and Landing page. Resource labels link to verified pages and section anchors, including
DeepWiki (the name used by pubky.org) and Context7. The site link sits beneath the title.
Links throughout the deck keep their text color and use a thin muted-gray underline
that turns lime on hover or keyboard focus. Links whose text is already lime have
no underline. The label itself is clickable rather than a separate arrow.
The next chapter uses the Agenda's four-section layout. Pubky Ring v2.0 and Pubky
Passport appear under “Just released”; private data, payments, and shared data/indexing
cover upcoming work without promising release dates.

The incoming files stay in the ignored `references/` directory:

- `references/inspiration/inspiration.pptx`: first visual reference.
- `references/last-call/last-call.pptx`: previous call reference and cover animation.
- `references/content/source.pdf`: planning source.
- `references/nexus-scout/incoming-image`: original Scout query screenshot.
- `references/conferences/incoming-image`: original conference screenshot.
- `references/agent-skills/incoming-image`: previous Agent skills illustration, retained privately.
- `references/agent-skills/replacement-image`: previous Agent skills illustration, retained privately.
- `references/agent-skills/replacement-image-2`: current transparent Agent skills illustration.
- `references/collections/incoming-image`: previous Collections illustration, retained privately.
- `references/collections/replacement-image`: current transparent Collections illustration.
- `references/self-hosting/incoming-image`: previous self-hosting illustration, retained privately.
- `references/self-hosting/replacement-image-2`: current transparent illustration shared by both self-hosting slides.
- `references/pkarr/incoming-image`: previous PKARR illustration, retained privately.
- `references/pkarr/replacement-image`: current transparent PKARR illustration.
- `references/loopky/incoming-image`: current transparent Loopky illustration.
- `references/iroh/incoming-image`: current iroh-blobs illustration.
- `references/thanks/incoming-image`: current closing illustration.
- `references/backgrounds/bg-square.png`: exact downloaded pubky.org background.

Keep the complete reference files and extraction working files in `references/`.
Only the image and animation files documented in `BRANDING.md` are copied
to `web/assets/artwork/`, `web/assets/screenshots/`, and `web/assets/backgrounds/`
for the presentation. Do not copy the
complete references into `web/` or `dist/`. The
`.gitignore` excludes them from ordinary Git adds; it cannot prevent a forced
`git add -f`.

## License

Except for the branding, artwork, and source composition reproductions identified
in [BRANDING.md](BRANDING.md), this repository's original slide content and source
code are licensed under the [MIT License](LICENSE).

Those excluded materials, including reproductions embedded in slides and exported
presentations, remain subject to their respective owners' rights. No trademark rights are granted.

See [BRANDING.md](BRANDING.md) for the asset inventory and separate usage terms,
and [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) for the bundled Inter Tight
font's SIL Open Font License and software dependency notices.
