import { AnimatePresence, motion } from 'framer-motion'
import { Command, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navItems, profile } from '@/content'
import { useScrollSpy } from '@/hooks/use-scroll-spy'
import { scrollToSection, scrollToTop } from '@/lib/smooth-scroll'
import { cn } from '@/lib/utils'
import { Magnetic } from './magnetic'
import { StatusPill } from './status-pill'
import { ThemeToggle } from './theme-toggle'

function openPalette() {
  window.dispatchEvent(new CustomEvent('open-command-palette'))
}

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const ids = navItems.map((i) => i.id)
  const active = useScrollSpy(ids)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id: string) => {
    scrollToSection(id)
    setMenuOpen(false)
  }

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-300',
          scrolled ? 'py-2' : 'py-3 sm:py-4',
        )}
      >
        <nav
          className={cn(
            'container flex items-center justify-between rounded-full px-3 transition-all duration-300 sm:px-4',
            scrolled ? 'glass-strong py-2 shadow-card' : 'py-2',
          )}
        >
          {/* Logo */}
          <Magnetic strength={0.25}>
            <button
              type="button"
              onClick={scrollToTop}
              className="group flex items-center gap-2.5"
              aria-label="Back to top"
            >
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-aurora-gradient text-sm font-bold text-white shadow-glow-sm transition-transform duration-300 group-hover:scale-105">
                {profile.initials}
              </span>
              <span className="hidden font-display text-sm font-semibold sm:inline">
                {profile.name}
              </span>
            </button>
          </Magnetic>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => go(item.id)}
                className={cn(
                  'relative rounded-full px-3 py-1.5 text-sm transition-colors',
                  active === item.id ? 'text-foreground' : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {item.label}
                {active === item.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-full bg-card-strong"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Right cluster */}
          <div className="flex items-center gap-2">
            <StatusPill available={profile.available} className="hidden lg:inline-flex" />
            <button
              type="button"
              onClick={openPalette}
              className="hidden items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
              aria-label="Open command palette"
            >
              <Command size={13} />
              <kbd className="font-sans">⌘K</kbd>
            </button>
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full glass text-muted-foreground hover:text-foreground md:hidden"
              aria-label="Open menu"
            >
              <Menu size={18} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[70] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="absolute inset-x-3 top-3 overflow-hidden rounded-3xl glass-strong p-4 shadow-card"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="font-display font-semibold">Menu</span>
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full glass"
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="flex flex-col">
                {navItems.map((item, i) => (
                  <motion.button
                    key={item.id}
                    type="button"
                    onClick={() => go(item.id)}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i }}
                    className={cn(
                      'flex items-center justify-between rounded-2xl px-4 py-3 text-left text-lg font-medium transition-colors hover:bg-card',
                      active === item.id ? 'text-foreground' : 'text-muted-foreground',
                    )}
                  >
                    {item.label}
                    <span className="font-mono text-xs text-faint-foreground">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
