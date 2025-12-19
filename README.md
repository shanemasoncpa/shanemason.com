# Personal Brand Website

A modern, elegant personal website built with [Astro](https://astro.build/) for GitHub Pages deployment.

## Features

- **Minimal & Elegant Design** - Clean typography (Cormorant Garamond + DM Sans) with subtle animations
- **Blog** - Markdown-based posts with content collections
- **Speaking** - Showcase speaking engagements with video embeds
- **Media** - Track articles and podcast appearances
- **Podcast** - The Liquidity Event page with YouTube playlist integration
- **Brooklyn Fi** - Company page with custom branding
- **Gemifi** - Product page with development updates
- **Personal** - Photo gallery with lightbox

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
/
├── .github/workflows/    # GitHub Actions for deployment
├── public/
│   ├── images/          # Static images
│   └── favicon.svg
├── src/
│   ├── components/      # Reusable Astro components
│   ├── content/         # Content collections (blog, media, etc.)
│   ├── layouts/         # Page layouts
│   ├── pages/           # Site pages
│   └── styles/          # Global and themed CSS
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## Adding Content

### Blog Posts

Create markdown files in `src/content/blog/`:

```markdown
---
title: "Your Post Title"
description: "Brief description"
pubDate: 2024-01-15
tags: ["tag1", "tag2"]
heroImage: "/images/blog/your-image.jpg"
---

Your content here...
```

### Media Appearances

Add JSON files to `src/content/media/`:

```json
{
  "title": "Article Title",
  "publication": "Publication Name",
  "date": "2024-01-15",
  "url": "https://...",
  "type": "article",
  "description": "Brief description"
}
```

### Gallery Photos

Add JSON files to `src/content/gallery/`:

```json
{
  "src": "/images/personal/photo.jpg",
  "alt": "Description",
  "caption": "Caption text",
  "category": "dog",
  "order": 1
}
```

Categories: `dog`, `mexico`, `sailing`, `travel`, `other`

## Customization

### Update Site Information

1. Edit `astro.config.mjs` to set your site URL
2. Update social links in `src/components/Footer.astro`
3. Replace placeholder content in pages

### Branding

- **Main theme**: Edit `tailwind.config.mjs` for colors
- **Brooklyn Fi**: Edit `src/styles/brooklyn-fi.css`
- **Gemifi**: Edit `src/styles/gemifi.css`

### Images

Add your images to `public/images/`:
- `profile.jpg` - About page photo
- `speaking-hero.jpg` - Speaking page hero
- `og-default.jpg` - Social sharing default image
- `blog/` - Blog post hero images
- `personal/` - Personal life photos

## Deployment

The site automatically deploys to GitHub Pages when you push to the `main` branch.

### Manual Setup

1. Create a GitHub repository
2. Push your code
3. Go to Settings > Pages
4. Set source to "GitHub Actions"
5. The workflow will run automatically

### Custom Domain

1. Add your domain in repo Settings > Pages
2. Update `site` in `astro.config.mjs`
3. Add CNAME record with your DNS provider

## Tech Stack

- [Astro](https://astro.build/) - Static site generator
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [GitHub Actions](https://github.com/features/actions) - CI/CD

## License

MIT

# shanemason.com
