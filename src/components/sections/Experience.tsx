import { motion, useScroll, useSpring } from 'framer-motion'
import { useRef } from 'react'
import { experience } from '@/content'
import { Reveal } from '../reveal'
import { SectionHeading } from '../section-heading'
import { Badge } from '../ui/badge'

export function Experience() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 80px', 'end 60%'],
  })
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.3 })

  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="container">
        <SectionHeading
          index="03"
          title="Experience"
          subtitle="Roles where I've shipped, led, and learned."
        />

        <div ref={ref} className="relative mx-auto max-w-3xl">
          {/* Base line */}
          <div className="absolute left-4 top-2 h-[calc(100%-1rem)] w-px bg-border sm:left-6" />
          {/* Filled gradient line (tracks scroll) */}
          <motion.div
            style={{ scaleY }}
            className="absolute left-4 top-2 h-[calc(100%-1rem)] w-px origin-top bg-aurora-gradient sm:left-6"
          />

          <div className="flex flex-col gap-10">
            {experience.map((entry) => (
              <Reveal key={`${entry.company}-${entry.period}`} className="relative pl-12 sm:pl-16">
                {/* Dot */}
                <span className="absolute left-4 top-2 grid h-3.5 w-3.5 -translate-x-1/2 place-items-center rounded-full bg-aurora-gradient ring-4 ring-background sm:left-6" />

                <div className="rounded-2xl glass p-6 border-gradient transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold">{entry.role}</h3>
                    <span className="font-mono text-xs text-muted-foreground">
                      {entry.period}
                    </span>
                  </div>
                  <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
                    <a
                      href={entry.url}
                      className="font-medium text-foreground transition-colors hover:text-aurora-2"
                    >
                      {entry.company}
                    </a>
                    <span>·</span>
                    <span>{entry.location}</span>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {entry.description}
                  </p>

                  <ul className="mt-4 flex flex-col gap-2">
                    {entry.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-aurora-gradient" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {entry.tech.map((tech) => (
                      <Badge key={tech} variant="accent">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
