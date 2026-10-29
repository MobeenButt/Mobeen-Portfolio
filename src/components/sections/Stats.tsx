import { animate, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { stats } from '@/content'
import { Reveal } from '../reveal'

function Counter({ value, suffix }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, {
      duration: 1.6,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, value])

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}

export function Stats() {
  return (
    <section className="relative py-12 sm:py-16">
      <div className="container">
        <Reveal>
          <div className="mx-auto grid max-w-md grid-cols-2 gap-4 rounded-3xl glass-strong p-8 shadow-card sm:p-10">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="relative flex flex-col items-center text-center"
              >
                {i > 0 && (
                  <div className="absolute left-0 top-1/2 h-12 w-px -translate-y-1/2 bg-border" />
                )}
                <div className="font-display text-4xl font-bold text-gradient sm:text-5xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
