# Backend & Automation Engineer Portfolio

A modern, high-performance portfolio built with Astro and Tailwind CSS, designed to showcase backend engineering and automation projects with a focus on technical depth and clean architecture.

## Overview

This portfolio demonstrates production-grade systems through detailed project documentation, emphasizing architectural decisions, engineering challenges, and technical implementation details. The site is built with performance and maintainability in mind, using a content-driven approach that separates presentation from data.

## Tech Stack

**Frontend Framework:** Astro 5.x  
**Styling:** Tailwind CSS 3.x  
**Content Management:** Markdown with YAML frontmatter  
**Deployment:** GitHub Pages with GitHub Actions  
**Type Safety:** TypeScript (strict mode)

## Architecture

The project follows a modular architecture with clear separation of concerns:

```
src/
├── components/       # Reusable UI components
├── content/          # Markdown-based project documentation
├── layouts/          # Page templates
└── pages/            # Route definitions
```

### Key Design Decisions

- **Static Site Generation (SSG):** All pages are pre-rendered at build time for optimal performance
- **Content Collections:** Type-safe content management with Astro's built-in validation
- **Component-Based Architecture:** Modular, reusable components for maintainability
- **Mobile-First Responsive Design:** Optimized for all screen sizes

## Development

### Prerequisites

- Node.js 20.x or higher
- npm 10.x or higher

### Local Development

```bash
# Install dependencies
npm install

# Start development server
node node_modules/astro/astro.js dev
```

The site will be available at `http://localhost:4321`

### Build for Production

```bash
# Generate static site
npm run build

# Preview production build
npm run preview
```

## Content Management

Projects are managed through Markdown files in `src/content/projects/`. Each project is organized in its own folder with an `index.mdx` file and optional images.

### Project Structure

```
src/content/projects/
├── your-project-name/
│   ├── index.mdx              # Project content and metadata
│   ├── screenshot-1.png      # Optional: screenshots
│   └── architecture.png      # Optional: diagrams
```

### Adding a New Project

1. **Create a project folder** in `src/content/projects/` with a descriptive name (use kebab-case)
2. **Create `index.mdx`** inside the folder with the following frontmatter:

```yaml
---
title: "Your Project Title"
tagline: "A short, catchy description"
description: "Detailed description for SEO and project cards"
tech: ["Technology 1", "Technology 2", "Technology 3"]
github: "https://github.com/username/repo"  # Optional
featured: true  # Optional: show on homepage
order: 1  # Display order (lower numbers appear first)
---
```

3. **Write your content** using Markdown below the frontmatter
4. **Add images** (optional) by placing them in the same folder and referencing them:

```markdown
## Architecture

Here's the system architecture:

![Architecture diagram](./architecture.png)

## Screenshots

The main interface:

![Main interface](./screenshot-1.png)
```

### Image Optimization

Images placed in project folders are **automatically optimized** by Astro:
- ✅ Compressed and converted to modern formats (WebP/AVIF)
- ✅ Responsive image variants generated
- ✅ Lazy-loaded for better performance
- ✅ Cache-busting with content hashes

**Note:** Do NOT place images in the `public/` folder as they won't be optimized.

### Image Sizing

**Default size:** Images are displayed at a maximum width of 800px by default.

**To change the default size:** Edit `src/pages/projects/[slug].astro` and modify the `.prose img` CSS rule:

```css
.prose img {
  max-width: 800px;  /* Change this value */
  width: 100%;
  height: auto;
  /* ... */
}
```

**To set a custom size for a specific image:** Use HTML syntax instead of Markdown:

```html
<!-- Custom width (maintains aspect ratio) -->
<img src="./screenshot.png" alt="Screenshot" width="600" />

<!-- Or use inline styles -->
<img src="./diagram.png" alt="Diagram" style="max-width: 500px;" />
```

### Content Schema

The content schema is validated at build time using Zod, ensuring type safety and consistency.

## Deployment

The site uses GitHub Actions for continuous deployment to GitHub Pages. On every push to `main`:

1. Dependencies are installed
2. The site is built
3. Static files are deployed to GitHub Pages

### Initial Setup

1. Enable GitHub Pages in repository settings
2. Set source to "GitHub Actions"
3. Update `astro.config.mjs` with your site URL and base path

## Customization

### Theme Colors

Modify `tailwind.config.cjs` to adjust the color palette:

```javascript
colors: {
  dark: {
    bg: '#0a0a0a',
    card: '#1a1a1a',
    border: '#2a2a2a',
    text: '#e5e5e5',
  },
  accent: {
    green: '#10b981',
    purple: '#8b5cf6',
  },
}
```

### Personal Information

Update these files with your details:

- `src/components/Hero.astro` - Name, title, location, status
- `src/components/Footer.astro` - Contact information, social links
- `astro.config.mjs` - Site URL and base path

## Performance

The site is optimized for performance with:

- Zero JavaScript by default (Astro Islands architecture)
- Optimized font loading with preconnect
- Minimal CSS with Tailwind's JIT compiler
- Static asset optimization

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)

## License

MIT
