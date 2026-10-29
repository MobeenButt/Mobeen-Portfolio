import Lenis from 'lenis'

/**
 * Module-level Lenis singleton. App sets it up once; any component can call
 * scrollToSection / scrollToTop without prop-drilling.
 */
let lenisInstance: Lenis | null = null

/** Initialise smooth scrolling. Returns a cleanup function. Respects reduced motion. */
export function initSmoothScroll(): () => void {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReduced) return () => {}
  if (lenisInstance) return () => {}

  const lenis = new Lenis({
    duration: 1.1,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    touchMultiplier: 1.5,
  })
  lenisInstance = lenis

  let raf = 0
  const loop = (time: number) => {
    lenis.raf(time)
    raf = requestAnimationFrame(loop)
  }
  raf = requestAnimationFrame(loop)

  return () => {
    cancelAnimationFrame(raf)
    lenis.destroy()
    lenisInstance = null
  }
}

const HEADER_OFFSET = 80

export function scrollToSection(id: string): void {
  const el = document.getElementById(id)
  if (!el) return
  if (lenisInstance) {
    lenisInstance.scrollTo(el, { offset: -HEADER_OFFSET, duration: 1.2 })
  } else {
    const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

export function scrollToTop(): void {
  if (lenisInstance) lenisInstance.scrollTo(0, { duration: 1.2 })
  else window.scrollTo({ top: 0, behavior: 'smooth' })
}
