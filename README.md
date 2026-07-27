# Marginalia

Short fiction by Sebastian Shaw. Static HTML/CSS/JS, no build step — same pattern as [Superman: Vanguard](https://superman-vanguard.vercel.app/) and [Warden of Systems](https://wardenofsystems.netlify.app/).

## Structure

```
index.html            Homepage — hero, links to the two novels, featured stories, about strip
about.html             About page
stories/index.html     All stories listing
stories/*.html         Individual story pages (one file per story)
css/style.css          All styling (design tokens at the top, light/dark theme)
js/main.js             Theme toggle (persists via localStorage)
images/favicon.svg     Favicon
```

## Adding a new story

1. Copy an existing file in `stories/` as a template.
2. Update `<title>`, the `meta`/`dek`/`byline` in `.story-header`, and the body copy inside `.story-body`. Add a `.content-note` line under the dek if the piece needs one.
3. Add a matching card to `stories/index.html` and, if it should be featured, to the "Short fiction" section of `index.html`. Pick a two-color gradient for `--cg` on the card's `.cover` div.
4. Update the "Next" / "Previous" links in `.story-footer` on the story pages either side of it.

## Local dev

```
npm run dev
```

Serves the site at `http://localhost:8000` with Python's built-in server (no dependencies needed).

## Deploy

Matches the Vercel setup used by `superman-vanguard`:

```
npm i -g vercel   # if not already installed
vercel --prod
```

Or connect the repo in the Vercel dashboard and it will deploy as a static site automatically (no framework preset / build command needed).
