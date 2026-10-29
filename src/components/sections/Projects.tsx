import { AnimatePresence, motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { useState } from 'react'
import { SiGithub } from 'react-icons/si'
import { projectTechList, projects } from '@/content'
import { cn } from '@/lib/utils'
import { Reveal } from '../reveal'
import { SectionHeading } from '../section-heading'
import { TiltCard } from '../tilt-card'
import { Badge } from '../ui/badge'

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const [expanded, setExpanded] = useState(false)
  const [from, to] = project.accent ?? ['#2dd4bf', '#8b5cf6']

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <TiltCard max={6} className="group h-full">
        <div className="relative flex h-full flex-col overflow-hidden rounded-2xl glass border-gradient shadow-card transition-shadow duration-300 hover:shadow-card-hover">
          {/* Banner */}
          <div className="relative h-32 overflow-hidden">
            <div
              className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110"
              style={{ backgroundImage: `linear-gradient(135deg, ${from}, ${to})` }}
            />
            <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20" />
            <div className="absolute inset-0 grid place-items-center">
              <span className="font-display text-3xl font-bold text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.25)]">
                {project.title
                  .split(' ')
                  .map((w) => w[0])
                  .slice(0, 2)
                  .join('')}
              </span>
            </div>
            {project.featured && (
              <span className="absolute right-3 top-3 rounded-full bg-black/30 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-white backdrop-blur-sm">
                Featured
              </span>
            )}
          </div>

          {/* Body */}
          <div className="flex flex-1 flex-col p-5">
            <h3 className="font-display text-lg font-semibold">{project.title}</h3>
            <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{project.description}</p>

            {/* Tags */}
            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Expandable details */}
            <AnimatePresence initial={false}>
              {expanded && project.longDescription && (
                <motion.p
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden text-sm leading-relaxed text-muted-foreground"
                >
                  <span className="mt-3 block">{project.longDescription}</span>
                </motion.p>
              )}
            </AnimatePresence>

            {/* Tech */}
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.tech.map((tech) => (
                <Badge key={tech} variant="accent">
                  {tech}
                </Badge>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-5 flex items-center gap-4 border-t border-border pt-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-aurora-2"
                >
                  <ExternalLink size={15} /> Live
                </a>
              )}
              {project.codeUrl && (
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  <SiGithub size={15} /> Code
                </a>
              )}
              {project.longDescription && (
                <button
                  type="button"
                  onClick={() => setExpanded((v) => !v)}
                  className="ml-auto text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {expanded ? 'Less' : 'More'}
                </button>
              )}
            </div>
          </div>
        </div>
      </TiltCard>
    </motion.div>
  )
}

export function Projects() {
  const [filter, setFilter] = useState('All')
  const filtered =
    filter === 'All' ? projects : projects.filter((p) => p.tech.includes(filter))
  const filters = ['All', ...projectTechList]

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="container">
        <SectionHeading
          index="04"
          title="Projects"
          subtitle="Selected work — filter by the stack that interests you."
        />

        {/* Filter bar */}
        <Reveal className="mb-10 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={cn(
                'relative rounded-full px-4 py-1.5 text-sm transition-colors',
                filter === f ? 'text-white' : 'text-muted-foreground hover:text-foreground',
              )}
            >
              {filter === f && (
                <motion.span
                  layoutId="filter-active"
                  className="absolute inset-0 -z-10 rounded-full bg-aurora-gradient"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
              {f}
            </button>
          ))}
        </Reveal>

        {/* Grid */}
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
