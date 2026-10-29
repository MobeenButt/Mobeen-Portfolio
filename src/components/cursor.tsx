import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion'

/**
 * Custom cursor: a dot that tracks instantly and a ring that follows with a
 * spring. The ring expands over interactive elements. Uses mix-blend-difference
 * so it stays visible on any background. Auto-disabled on touch + reduced motion.
 */
export function Cursor() {
  const reduced = usePrefersReducedMotion()
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [visible, setVisible] = useState(false)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const ringX = useSpring(x, { stiffness: 350, damping: 28, mass: 0.4 })
  const ringY = useSpring(y, { stiffness: 350, damping: 28, mass: 0.4 })

  useEffect(() => {
    if (reduced) return
    if (window.matchMedia('(pointer: coarse)').matches) return

    setEnabled(true)
    document.documentElement.classList.add('cursor-hidden')

    const move = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setVisible(true)
      const target = e.target as Element | null
      const interactive = !!target?.closest(
        'a, button, [role="button"], input, textarea, select, label, [data-cursor="hover"]',
      )
      setHovering(interactive)
    }
    const leave = () => setVisible(false)

    window.addEventListener('mousemove', move, { passive: true })
    document.addEventListener('mouseleave', leave)
    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseleave', leave)
      document.documentElement.classList.remove('cursor-hidden')
    }
  }, [reduced, x, y])

  if (!enabled) return null

  return (
    <>
      <motion.div className="pointer-events-none fixed left-0 top-0 z-[9999] mix-blend-difference" style={{ x, y }}>
        <motion.div
          className="rounded-full bg-white"
          animate={{
            width: hovering ? 14 : 8,
            height: hovering ? 14 : 8,
            x: hovering ? -7 : -4,
            y: hovering ? -7 : -4,
            opacity: visible ? 1 : 0,
          }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        />
      </motion.div>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] mix-blend-difference"
        style={{ x: ringX, y: ringY }}
      >
        <motion.div
          className="rounded-full border border-white/70"
          animate={{
            width: hovering ? 56 : 32,
            height: hovering ? 56 : 32,
            x: hovering ? -28 : -16,
            y: hovering ? -28 : -16,
            opacity: visible ? 0.6 : 0,
          }}
          transition={{ type: 'spring', stiffness: 250, damping: 22 }}
        />
      </motion.div>
    </>
  )
}
