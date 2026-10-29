import { useEffect, useState } from 'react'

/** Returns the id of the section currently in view, for scrollspy nav. */
export function useScrollSpy(ids: string[], offset = 120): string {
  const [active, setActive] = useState(ids[0] ?? '')

  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY + offset
      let current = ids[0] ?? ''
      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue
        const top = el.getBoundingClientRect().top + window.scrollY
        if (top <= scrollPos) current = id
      }
      setActive((prev) => (prev === current ? prev : current))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [ids, offset])

  return active
}
