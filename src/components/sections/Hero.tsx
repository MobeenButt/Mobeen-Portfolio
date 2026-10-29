import { motion, type Variants } from 'framer-motion'
import { ArrowDown, ArrowRight, MapPin } from 'lucide-react'
import { useEffect, useState } from 'react'
import { profile } from '@/content'
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion'
import { scrollToSection } from '@/lib/smooth-scroll'
import { cn } from '@/lib/utils'
import { Magnetic } from '../magnetic'
import { Button, buttonVariants } from '../ui/button'

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
}
const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

/** Typewriter that cycles through `profile.roles`. */
function useTypewriter(words: string[], reduced: boolean) {
  const [index, setIndex] = useState(0)
  const [sub, setSub] = useState(reduced ? words[0] ?? '' : '')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (reduced) return
    const current = words[index % words.length] ?? ''
    let timeout: ReturnType<typeof setTimeout>
    if (!deleting && sub === current) {
      timeout = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && sub === '') {
      setDeleting(false)
      setIndex((i) => i + 1)
    } else {
      timeout = setTimeout(
        () => setSub((prev) => (deleting ? prev.slice(0, -1) : current.slice(0, prev.length + 1))),
        deleting ? 45 : 85,
      )
    }
    return () => clearTimeout(timeout)
  }, [sub, deleting, index, words, reduced])

  return sub
}

function useLocalTime(timezone: string) {
  const [now, setNow] = useState(() => new Date())
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])
  const time = new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
    timeZone: timezone,
  }).format(now)
  const hour = Number(
    new Intl.DateTimeFormat('en-US', { hour: '2-digit', hour12: false, timeZone: timezone }).format(now),
  )
  const greeting =
    hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening'
  return { time, greeting }
}

export function Hero() {
  const reduced = usePrefersReducedMotion()
  const typed = useTypewriter(profile.roles, reduced)
  const { time, greeting } = useLocalTime(profile.timezone)

  return (
    <section id="home" className="relative flex min-h-svh items-center pt-24">
      <div className="container">
        <motion.div
          variants={container}
          initial={reduced ? false : 'hidden'}
          animate="visible"
          className="flex flex-col items-center text-center"
        >
          {/* Eyebrow */}
          <motion.div variants={item} className="mb-6 flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-muted-foreground">
              <MapPin size={13} />
              {profile.location}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-glow-pulse rounded-full bg-emerald-400" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {profile.available ? 'Available for work' : 'Open to opportunities'}
            </span>
          </motion.div>

          {/* Greeting */}
          <motion.p variants={item} className="mb-3 font-mono text-sm text-muted-foreground">
            {greeting}, I&apos;m
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={item}
            className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl"
          >
            <span className="text-gradient-animated">{profile.name}</span>
          </motion.h1>

          {/* Role typewriter */}
          <motion.div
            variants={item}
            className="mt-4 flex h-9 items-center font-display text-xl text-muted-foreground sm:text-2xl"
          >
            <span className="text-foreground">{profile.role}</span>
            <span className="ml-2 inline-block">
              <span className="text-gradient">{typed}</span>
              {!reduced && <span className="ml-0.5 inline-block w-0.5 animate-pulse bg-aurora-2 align-middle" style={{ height: '1em' }} />}
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg"
          >
            {profile.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Magnetic strength={0.3}>
              <Button size="lg" onClick={() => scrollToSection('projects')}>
                View Work <ArrowRight size={16} />
              </Button>
            </Magnetic>
            <Magnetic strength={0.3}>
              <a className={cn(buttonVariants({ variant: 'secondary', size: 'lg' }))} href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}>
                Get in touch
              </a>
            </Magnetic>
          </motion.div>

          {/* Socials */}
          <motion.div variants={item} className="mt-8 flex items-center gap-3">
            {profile.socials.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target={social.url.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="group grid h-10 w-10 place-items-center rounded-full glass text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:text-foreground"
                >
                  <Icon size={18} />
                </a>
              )
            })}
          </motion.div>

          {/* Live time + scroll hint */}
          <motion.div variants={item} className="mt-14 flex flex-col items-center gap-4">
            <span className="font-mono text-xs text-faint-foreground">
              {time} — local time
            </span>
            <button
              type="button"
              onClick={() => scrollToSection('about')}
              className="group flex flex-col items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Scroll to about"
            >
              <span>Scroll</span>
              <ArrowDown size={14} className="animate-bounce" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
