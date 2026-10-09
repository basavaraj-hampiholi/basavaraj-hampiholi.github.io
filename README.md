# Basavaraj Hampiholi — academic website (classic blue)

An **academic-first GitHub Pages website** inspired by the calm typography and content hierarchy of **al-folio**. It is **not** the official al-folio/Jekyll theme and does not claim to be: this is a lightweight static implementation for easier deployment. It preserves the research / industry substance from the uploaded resume but prioritizes publications, academic news, and CV over commercial-style portfolio visuals.

## Pages
- `index.html` — about, recent research news, selected publications, and focus areas
- `publications/index.html` — all four papers with expandable BibTeX
- `research/index.html` — scientific projects and applied research
- `cv/index.html` — academic CV and downloadable public PDF
- `_bibliography/papers.bib` — editable BibTeX entries (for future migration to official al-folio)
- `assets/pub-*.svg` — *original conceptual thumbnails*, not paper figures
- `assets/profile-placeholder.svg` — placeholder monogram; replace with your portrait photo

## Publish on GitHub Pages
1. Back up your existing `basavaraj-hampiholi.github.io` repository or work in a new branch.
2. Copy the **contents** of this folder into the repository root, replacing the old homepage. Remove or archive conflicting old pages and layouts.
3. In **Settings → Pages**, choose **Deploy from a branch**, branch `main`, directory `/ (root)`.
4. Allow the Pages deployment to finish; the site appears at `https://basavaraj-hampiholi.github.io/`.

A `.nojekyll` file disables Jekyll so `publications/`, `research/`, and `cv/` are served as normal static folders; `_bibliography/papers.bib` is included as a future al-folio migration asset and is not consumed by the static site. No package manager or build pipeline is required.

## Local preview
Run `python3 -m http.server 8000` in the website folder, then visit `http://localhost:8000`.

## Customize
- Edit page content in its respective `index.html`.
- Change colors at the beginning of `styles.css`.
- Replace `assets/profile-placeholder.svg` with an approved portrait (update the image filename and alt text in `index.html`).
- Replace schematic publication thumbnails with real, publishable figures from your papers.
- Confirm publication author spelling and citation details against publisher pages if this goes into public use.

## Privacy / public-facing review
The original residential address and telephone number in the uploaded résumé are intentionally excluded. The included public CV is the privacy-safe CV from the previous website version. No software-testing project descriptions are included. Employer-specific projects are summarized from the resume; review any confidentiality restrictions before publishing.

## Relationship to al-folio
If you want the **official Jekyll al-folio theme** in the future, the recommended approach is to create a repository from its upstream template and migrate the text/images and `_bibliography/papers.bib`. That uses the official plugin/gem based build and GitHub Actions instead of direct branch publishing.

## Color palette
The website now uses a **classic academic blue** accent (`#2459A6`), a soft blue background for hover states (`#EDF3FD`), and a brighter blue for dark mode (`#8DB9FF`). All original teal/green accent thumbnails and the favicon have been recolored to coordinate with the new palette. Edit the CSS variables at the start of `styles.css` to experiment with another accent.
