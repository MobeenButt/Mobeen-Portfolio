import { motion, useScroll, useTransform } from 'framer-motion'
import { Download, Sparkles } from 'lucide-react'
import { useRef } from 'react'
import { marqueeSkills, profile } from '@/content'
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion'
import { SectionHeading } from '../section-heading'
import { TiltCard } from '../tilt-card'
import { buttonVariants } from '../ui/button'

export function About() {
  const ref = useRef<HTMLElement>(null)
  const reduced = usePrefersReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [40, -40])

  const floating = [marqueeSkills[0], marqueeSkills[3], marqueeSkills[8], marqueeSkills[12]].filter(
    Boolean,
  )
  const positions = [
    'left-6 top-6',
    'right-8 top-16',
    'bottom-10 left-10',
    'right-6 bottom-6',
  ]

  return (
    <section id="about" ref={ref} className="relative py-24 sm:py-32">
      <div className="container">
        <SectionHeading index="01" title="About" subtitle="A bit about who I am and how I work." />

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Portrait */}
          <div className="relative order-1 mx-auto w-full max-w-md lg:order-none">
            <motion.div style={reduced ? undefined : { y }}>
              <TiltCard max={10} className="group aspect-square w-full overflow-hidden rounded-3xl">
                <div className="relative h-full w-full overflow-hidden rounded-3xl glass-strong shadow-card">
                  <div className="absolute inset-0 bg-aurora-radial opacity-70" />
                  <div className="absolute inset-0 bg-aurora-gradient opacity-20" />
                  <div className="absolute inset-0 grid place-items-center">
                    <span className="font-display text-8xl font-bold text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.3)] sm:text-9xl">
                      {profile.initials}
                    </span>
                  </div>

                  {/* Floating tech badges */}
                  {floating.map((skill, i) => {
                    const Icon = skill.icon
                    return (
                      <div
                        key={skill.name}
                        className={`absolute ${positions[i]} animate-float`}
                        style={{ animationDelay: `${i * 0.8}s` }}
                      >
                        <div className="grid h-11 w-11 place-items-center rounded-2xl glass-strong text-foreground shadow-card">
                          <Icon size={20} />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </TiltCard>
            </motion.div>
          </div>

          {/* Text */}
          <div className="order-2 flex flex-col gap-5 lg:order-none">
            {profile.bio.map((paragraph, i) => (
              <p key={i} className="text-lg leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}

            {/* Currently building */}
            <div className="rounded-2xl glass border-l-2 border-aurora-2 p-5">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Sparkles size={16} className="text-aurora-2" />
                Currently building
              </div>
              <div className="mt-1.5 font-semibold">{profile.currentlyBuilding.title}</div>
              <p className="mt-1 text-sm text-muted-foreground">
                {profile.currentlyBuilding.description}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href={profile.resumeUrl}
                className={buttonVariants({ variant: 'primary', size: 'md' })}
              >
                Download résumé <Download size={16} />
              </a>
              <span className="font-mono text-sm text-muted-foreground">
                Based in {profile.location}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
