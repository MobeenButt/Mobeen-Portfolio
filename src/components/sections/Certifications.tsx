import { ArrowUpRight } from 'lucide-react'
import { certifications } from '@/content'
import { Reveal, Stagger } from '../reveal'
import { SectionHeading } from '../section-heading'

export function Certifications() {
  return (
    <section id="certifications" className="relative py-24 sm:py-32">
      <div className="container">
        <SectionHeading
          index="05"
          title="Certifications"
          subtitle="Credentials backing up the skills above."
        />

        <Stagger className="grid gap-5 sm:grid-cols-2" stagger={0.1}>
          {certifications.map((cert) => {
            const Icon = cert.icon
            return (
              <Reveal key={cert.title}>
                <a
                  href={cert.credentialUrl ?? '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 rounded-2xl glass p-5 border-gradient transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-xl bg-aurora-gradient text-white shadow-glow-sm">
                    {Icon ? <Icon size={22} /> : null}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-medium leading-snug">{cert.title}</h3>
                    <div className="mt-1 text-sm text-muted-foreground">
                      {cert.issuer} · {cert.date}
                    </div>
                    {cert.credentialId && (
                      <div className="mt-2 font-mono text-[11px] text-faint-foreground">
                        ID: {cert.credentialId}
                      </div>
                    )}
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-muted-foreground opacity-40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground group-hover:opacity-100"
                  />
                </a>
              </Reveal>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}
