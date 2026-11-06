# Airspacers Newsletters — The Run Up

Static web editions of **The Run Up**, Airspacers Flying Club’s bi-monthly newsletter, with an email announcement template and supporting images. testsz

## Repository structure

```text
airspacers-newsletters/
├── README.md
├── styles.css                 # Shared newsletter styles
├── script.js                  # Scroll-triggered fade-in animations
├── assets/
│   ├── fonts/                 # Local Roboto and Rye fonts
│   └── images/                # Shared Airspacers logo
├── jul-aug-2026/
│   ├── index.html             # Full web newsletter
│   ├── email.html             # Email announcement template
│   └── assets/                # Issue photos and copies of fonts/logo
└── sep-oct-2026/
    ├── index.html             # Full web newsletter
    ├── email.html             # Email announcement template
    └── assets/images/         # Issue photos and seasonal logo
```

The July–August and September–October 2026 web editions are complete.

## Preview and edit

Open `jul-aug-2026/index.html` or `sep-oct-2026/index.html` directly in a browser. No dependencies, installation, or build step are required.

- Edit issue text, events, leaderboards, image references, and captions in the issue’s `index.html`.
- Store issue photographs in that issue’s `assets/images/` folder.
- Edit `styles.css` at the repository root to change shared presentation.
- Edit `script.js` at the repository root to change the scroll animation.
- Open and edit `jul-aug-2026/email.html` separately for the email announcement. It uses table-based markup and inline styles, and references a remotely hosted logo. Review its links and copy before sending; the PDF attachment mentioned in the template must be supplied separately.

The website includes responsive layouts, local fonts, photographs displayed without cropping, and print styles. Content remains visible when JavaScript or IntersectionObserver is unavailable, and reduced-motion preferences are supported.

## Add an issue

1. Create a dated folder such as `sep-oct-2026/` with an `assets/images/` subfolder.
2. Use the existing issue’s `index.html` as a starting point and update its title, metadata, dates, content, photos, captions, and image descriptions.
3. Keep references to shared files relative to the issue folder: `../styles.css`, `../script.js`, and `../assets/images/airspacers-logo.png`.
4. Preview the page at desktop and mobile widths, check image paths and links, and review the print layout.
5. Add the new files to Git and commit them when ready.

## Publish

Serve the repository root through a static host such as Cloudflare Pages, GitHub Pages, or Netlify. Preserve the directory structure: issue pages depend on shared styles, scripts, fonts, and branding at the root.

The issues are available at `/jul-aug-2026/` and `/sep-oct-2026/` relative to the site’s base URL. There is currently no root `index.html` or newsletter archive page.
