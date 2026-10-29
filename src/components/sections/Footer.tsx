import { ArrowUp } from 'lucide-react'
import { profile } from '@/content'
import { scrollToTop } from '@/lib/smooth-scroll'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-border py-12">
      <div className="container flex flex-col items-center gap-6 text-center">
        <button
          type="button"
          onClick={scrollToTop}
          className="group flex flex-col items-center gap-2"
          aria-label="Back to top"
        >
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-aurora-gradient text-sm font-bold text-white shadow-glow-sm transition-transform duration-300 group-hover:-translate-y-1">
            {profile.initials}
          </span>
          <span className="inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors group-hover:text-foreground">
            Back to top <ArrowUp size={12} />
          </span>
        </button>

        <div className="flex items-center gap-3">
          {profile.socials.map((social) => {
            const Icon = social.icon
            return (
              <a
                key={social.name}
                href={social.url}
                target={social.url.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={social.name}
                className="grid h-9 w-9 place-items-center rounded-full glass text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:text-foreground"
              >
                <Icon size={16} />
              </a>
            )
          })}
        </div>

        <p className="text-sm text-muted-foreground">
          Built with React, Vite, Tailwind CSS &amp; Framer Motion.
        </p>
        <p className="text-xs text-faint-foreground">
          © {year} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
