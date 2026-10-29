import type { Project } from './types'

/**
 * `tech` drives the Projects filter. `featured` projects lead the showcase.
 * `accent` is a [from, to] pair used to render each card's gradient thumbnail.
 */
export const projects: Project[] = [
  {
    title: 'Aurora UI',
    description:
      'A headless, accessible component library with animated variants baked in. Tree-shakeable and theme-driven from a single CSS variable layer.',
    longDescription:
      'Aurora ships ~30 primitives built on Radix-style APIs with a tiny runtime. Every component has motion presets, reduced-motion fallbacks, and a token system so a product can re-skin in seconds.',
    tags: ['Open Source', 'Design System'],
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: '#',
    codeUrl: '#',
    featured: true,
    accent: ['#2dd4bf', '#8b5cf6'],
  },
  {
    title: 'Tempo Analytics',
    description:
      'Real-time analytics dashboard rendering sub-second queries over billions of events with virtualised tables and live charts.',
    longDescription:
      'A streaming dashboard combining a WebSocket fan-out, request coalescing, and canvas-based charts that stay at 60fps with 50k+ rows.',
    tags: ['Dashboard', 'Realtime'],
    tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis'],
    liveUrl: '#',
    codeUrl: '#',
    featured: true,
    accent: ['#8b5cf6', '#ec4899'],
  },
  {
    title: 'Glyph',
    description:
      'A keyboard-first note app with a local-first sync engine, CRDT-backed collaboration, and an animated command palette.',
    tags: ['Productivity', 'Local-first'],
    tech: ['React', 'TypeScript', 'Vite', 'GraphQL'],
    liveUrl: '#',
    codeUrl: '#',
    featured: true,
    accent: ['#ec4899', '#2dd4bf'],
  },
  {
    title: 'Driftwood',
    description:
      'A 3D product configurator with orbit controls, lazy-loaded GLTF assets, and a custom post-processing bloom pass.',
    tags: ['WebGL', '3D'],
    tech: ['React', 'Three.js', 'TypeScript'],
    liveUrl: '#',
    codeUrl: '#',
    featured: false,
    accent: ['#2dd4bf', '#8b5cf6'],
  },
  {
    title: 'Pulse CLI',
    description:
      'A developer CLI that scaffolds full-stack apps with pre-wired auth, tests, and CI. Publishes a typed config schema.',
    tags: ['Tooling', 'DX'],
    tech: ['TypeScript', 'Node.js', 'Docker', 'Git'],
    liveUrl: '#',
    codeUrl: '#',
    featured: false,
    accent: ['#8b5cf6', '#ec4899'],
  },
  {
    title: 'Atlas Docs',
    description:
      'A docs engine with live editable code blocks, MDX components, and an instant search index built at compile time.',
    tags: ['Docs', 'DX'],
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    liveUrl: '#',
    codeUrl: '#',
    featured: false,
    accent: ['#ec4899', '#2dd4bf'],
  },
]

/** Distinct tech strings, used to build the Projects filter UI. */
export const projectTechList = Array.from(
  new Set(projects.flatMap((p) => p.tech)),
).sort()
