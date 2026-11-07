# Mobeen Butt — Developer Portfolio

> A fast, accessible, and immersive portfolio for a full-stack developer building web applications and AI-powered solutions.

[![Live portfolio](https://img.shields.io/badge/Live%20Portfolio-mobeenbutt.dev-8b5cf6?style=for-the-badge&logo=googlechrome&logoColor=white)](https://mobeenbutt.dev)
[![React](https://img.shields.io/badge/React-19-61dafb?style=flat-square&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6-3178c6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8-646cff?style=flat-square&logo=vite&logoColor=white)](https://vite.dev/)

## Overview

This portfolio presents Mobeen Butt's experience, technical skills, projects, certifications, and contact information through a responsive glassmorphism interface. It combines a dark visual system with subtle motion, smooth navigation, and a content-driven architecture that makes personal updates straightforward.

The site is built with React and TypeScript, styled with Tailwind CSS, and bundled with Vite for a quick development experience and optimized production output.

## Highlights

- Responsive portfolio experience across mobile, tablet, and desktop
- Dark glassmorphism design with electric cyan, violet, and rose gradients
- Animated hero section with role typewriter and local-time greeting
- Smooth scrolling powered by Lenis
- Scroll-aware navigation and mobile menu
- Command palette for quick section and social-link navigation
- Project filtering and expandable project details
- Accessible focus states, semantic controls, and reduced-motion support
- Interactive tilt, magnetic, reveal, marquee, and gradient effects
- Lazy-loaded command palette to reduce the initial JavaScript payload
- Rendering containment for below-the-fold sections
- SEO-ready metadata, Open Graph tags, robots.txt, sitemap, and structured person data

## Technology

### Core

- React 19
- TypeScript
- Vite
- Tailwind CSS

### UI and interaction

- Framer Motion
- Lenis
- Lucide React
- React Icons
- `cmdk`
- Class Variance Authority
- Tailwind Merge

## Project structure

```text
src/
├── App.tsx                  # Application composition and providers
├── index.css                # Design tokens, glass surfaces, utilities, and motion styles
├── components/
│   ├── Header.tsx           # Responsive navigation and brand control
│   ├── command-palette.tsx  # Lazy-loaded keyboard navigation
│   ├── sections/            # Portfolio sections
│   └── ui/                  # Reusable UI primitives
├── content/                 # Portfolio data and shared types
├── hooks/                   # Scroll and accessibility-related hooks
├── lib/                     # Shared utilities and smooth scrolling
└── providers/               # Theme and application providers
```

Content is intentionally separated from presentation. Update the files in `src/content/` to change profile information, navigation, skills, projects, experience, certifications, or statistics.

## Getting started

### Requirements

- Node.js 20 or newer
- npm 10 or newer

### Install

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Vite will print the local development URL in the terminal.

### Create a production build

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

### Run lint checks

```bash
npm run lint
```

## Customization

### Personal information

Edit [`src/content/profile.ts`](./src/content/profile.ts) for:

- Name and initials
- Professional roles
- Introduction and biography
- Location and timezone
- Availability status
- Resume link
- Social profiles

### Portfolio content

The remaining content modules are organized by purpose:

- [`src/content/projects.ts`](./src/content/projects.ts)
- [`src/content/experience.ts`](./src/content/experience.ts)
- [`src/content/skills.ts`](./src/content/skills.ts)
- [`src/content/certifications.ts`](./src/content/certifications.ts)
- [`src/content/stats.ts`](./src/content/stats.ts)
- [`src/content/nav.ts`](./src/content/nav.ts)

### Theme

The shared visual system lives in [`src/index.css`](./src/index.css). Update the CSS variables for backgrounds, text, glass surfaces, borders, shadows, and aurora accents. The gradient stops are also exposed through [`src/content/theme.ts`](./src/content/theme.ts).

## Performance and accessibility

The application is designed to keep the visual experience rich without making the initial page unnecessarily heavy:

- The command palette is loaded only when requested.
- Scroll state updates are coalesced with `requestAnimationFrame`.
- Section navigation uses `IntersectionObserver` instead of repeated layout reads.
- Distant sections use `content-visibility: auto` where supported.
- Reduced-motion preferences disable or simplify motion-heavy interactions.
- Decorative backgrounds and cursor effects do not affect semantic content.
- Production assets are generated through Vite's optimized build pipeline.

## Deployment

The project produces a static `dist/` directory and can be deployed to any static hosting provider.

Recommended build settings:

```text
Build command: npm run build
Output directory: dist
```

This works with platforms such as Vercel, Netlify, GitHub Pages, Cloudflare Pages, and any server capable of serving static files.

## Author

**Mobeen Butt**

Full-Stack Developer — MERN, .NET, and AI integrations

- GitHub: [github.com/mobeenbutt](https://github.com/mobeenbutt)
- LinkedIn: [linkedin.com/in/mobeen-butt](https://www.linkedin.com/in/mobeen-butt/)
- Email: [mobeen914butt@gmail.com](mailto:mobeen914butt@gmail.com)

## License

This repository is a personal portfolio project. Contact the author before reusing its branding, personal information, or portfolio content.
