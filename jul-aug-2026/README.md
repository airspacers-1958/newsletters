# The Run Up — July–August 2026

This directory is a self-contained static website. Open `index.html` directly or upload the entire directory to Cloudflare Pages, GitHub Pages, or Netlify.

## Included

- Responsive HTML newsletter
- Local Roboto and Rye font files (no font CDN required)
- All seven supplied photographs and the Airspacers logo
- Scroll-triggered fade-in animation with a reduced-motion fallback

## Two photographs still needed

The source newsletter references two images that were not among the supplied files:

1. Members Ryan Haid, Matthew Setzer, and Ian Dutton in front of the Douglas DC-3 at Oshkosh.
2. Members Nick Katsinas, Nathan Richards, Adam Handwerker, Ryan Haid, and Ishan Shah on a lunch mission to SBA.

The page contains labeled placeholders for both. To add the photos:

1. Put the files in `assets/images/`.
2. In `index.html`, replace each `<div role="img" ...>` inside a `.missing-image` figure with an `<img>` element pointing to the new file.

## Files

```text
airspacers-newsletter-jul-aug-2026/
├── index.html
├── styles.css
├── script.js
├── README.md
└── assets/
    ├── fonts/
    └── images/
```

The small `script.js` file is required for the requested scroll fade-in effect. If JavaScript is disabled or unsupported, the content remains fully visible.
