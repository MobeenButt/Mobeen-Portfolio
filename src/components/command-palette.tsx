import { Command } from 'cmdk'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Search } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navItems, profile } from '@/content'
import { scrollToSection } from '@/lib/smooth-scroll'

/**
 * Command palette opened with Cmd/Ctrl+K. Lets visitors jump to any section or
 * open a social link. Closes on Escape or selecting an item.
 */
export function CommandPalette() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setOpen((v) => !v)
      } else if (e.key === 'Escape') {
        setOpen(false)
      }
    }
    window.addEventListener('keydown', onKey)
    const onOpen = () => setOpen(true)
    window.addEventListener('open-command-palette', onOpen)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('open-command-palette', onOpen)
    }
  }, [])

  const goto = (id: string) => {
    scrollToSection(id)
    setOpen(false)
  }

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4">
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -8 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="relative w-full max-w-xl"
          >
            <Command
              label="Command Menu"
              loop
              className="glass-strong overflow-hidden rounded-2xl border border-border-strong shadow-card"
            >
              <div className="flex items-center gap-2 border-b border-border px-4">
                <Search size={16} className="text-muted-foreground" />
                <Command.Input
                  placeholder="Jump to a section…"
                  autoFocus
                  className="h-12 w-full bg-transparent text-sm text-foreground outline-none placeholder:text-faint-foreground"
                />
                <kbd className="hidden rounded border border-border px-1.5 py-0.5 text-[10px] text-faint-foreground sm:block">
                  ESC
                </kbd>
              </div>
              <Command.List className="max-h-80 overflow-y-auto p-2">
                <Command.Empty className="py-6 text-center text-sm text-muted-foreground">
                  No results found.
                </Command.Empty>

                <Command.Group heading="Navigation">
                  {navItems.map((item) => (
                    <Command.Item
                      key={item.id}
                      value={`${item.label} ${item.id}`}
                      onSelect={() => goto(item.id)}
                    >
                      <span>{item.label}</span>
                      <ArrowRight size={14} className="opacity-50" />
                    </Command.Item>
                  ))}
                </Command.Group>

                <Command.Group heading="Links">
                  {profile.socials.map((social) => (
                    <Command.Item
                      key={social.name}
                      value={social.name}
                      onSelect={() => {
                        window.open(social.url, '_blank', 'noopener')
                        setOpen(false)
                      }}
                    >
                      <span>{social.name}</span>
                      <ArrowRight size={14} className="opacity-50" />
                    </Command.Item>
                  ))}
                </Command.Group>
              </Command.List>
            </Command>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
