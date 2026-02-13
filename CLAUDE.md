# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (localhost:4321)
npm run build    # Build for production
npm run preview  # Preview production build locally
```

## Architecture

This is an Astro static site with Tailwind CSS, deployed to GitHub Pages.

### Content Collections

Content is managed via Astro Content Collections in `src/content/`. Each collection has a schema defined in `src/content/config.ts`:

- **blog/** - Markdown posts with frontmatter (title, description, pubDate, tags, heroImage, draft)
- **speaking/** - JSON files for speaking events (title, event, date, location, videoUrl, slidesUrl, upcoming)
- **media/** - JSON files for articles/podcasts (title, publication, date, url, type: article|podcast|video|interview)
- **gallery/** - JSON files for photos (src, alt, caption, category: dog|mexico|sailing|travel|other, order)
- **brooklynfi/** - JSON timeline entries (year, title, role, description, highlights)
- **gemifi/** - Markdown updates (title, version, date, description, type: release|update|milestone|story)

### Layouts

Three themed layouts in `src/layouts/`:
- `BaseLayout.astro` - Main site layout with Header/Footer
- `BrooklynFiLayout.astro` - Uses `src/styles/brooklyn-fi.css` with blue brand colors
- `GemifiLayout.astro` - Uses `src/styles/gemifi.css` with purple brand colors

### Path Aliases

Configured in `tsconfig.json`:
- `@/*` → `src/*`
- `@components/*` → `src/components/*`
- `@layouts/*` → `src/layouts/*`
- `@styles/*` → `src/styles/*`

### Styling

- Typography: Cormorant Garamond (serif headings) + DM Sans (sans body)
- Brand colors defined in `tailwind.config.mjs`: `primary.*`, `accent.*`, `brooklynfi.*`, `gemifi.*`
- Scroll animations: Add `animate-on-scroll` class to elements; `BaseLayout` handles IntersectionObserver

### Deployment

Automatic GitHub Pages deployment on push to `main` via `.github/workflows/astro.yml`. Site URL configured in `astro.config.mjs`.
