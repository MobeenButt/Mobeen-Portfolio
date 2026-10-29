import { AnimatePresence, motion } from 'framer-motion'
import { Check, Copy, Loader2, Mail, MapPin, Send } from 'lucide-react'
import { useState } from 'react'
import { profile } from '@/content'
import { Magnetic } from '../magnetic'
import { Reveal } from '../reveal'
import { SectionHeading } from '../section-heading'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')
  const [copied, setCopied] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    // ─────────────────────────────────────────────────────────────────────────
    // CLIENT-SIDE SIMULATION. To send real emails, wire this form to a provider:
    //   • Formspree: set <form action="https://formspree.io/f/XXXX" method="POST">
    //     and submit with fetch() instead of this setTimeout.
    //   • EmailJS: call emailjs.send(serviceId, templateId, form) here.
    // Replace the timeout below with the real request + error handling.
    // ─────────────────────────────────────────────────────────────────────────
    window.setTimeout(() => setStatus('success'), 1300)
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      // clipboard unavailable; ignore
    }
  }

  const reset = () => {
    setForm({ name: '', email: '', message: '' })
    setStatus('idle')
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="container">
        <SectionHeading
          index="06"
          title="Contact"
          subtitle="Have a role, a project, or an idea? Let's talk."
        />

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Direct contact */}
          <Reveal className="flex flex-col gap-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              My inbox is always open. Whether you have a question or just want to
              say hi, I&apos;ll try my best to get back to you.
            </p>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-4 rounded-2xl glass p-4">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-aurora-gradient text-white">
                  <Mail size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs text-faint-foreground">Email</div>
                  <a
                    href={`mailto:${profile.email}`}
                    className="truncate font-medium transition-colors hover:text-aurora-2"
                  >
                    {profile.email}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={copyEmail}
                  aria-label="Copy email"
                  className="grid h-9 w-9 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-card hover:text-foreground"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {copied ? (
                      <motion.span
                        key="check"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.5, opacity: 0 }}
                      >
                        <Check size={16} className="text-emerald-400" />
                      </motion.span>
                    ) : (
                      <motion.span
                        key="copy"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.5, opacity: 0 }}
                      >
                        <Copy size={16} />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </div>

              <div className="flex items-center gap-4 rounded-2xl glass p-4">
                <div className="grid h-11 w-11 place-items-center rounded-xl glass-strong text-foreground">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-xs text-faint-foreground">Location</div>
                  <div className="font-medium">{profile.location}</div>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="flex flex-wrap gap-3 pt-1">
              {profile.socials.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target={social.url.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="group inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:text-foreground"
                  >
                    <Icon size={16} />
                    {social.name}
                  </a>
                )
              })}
            </div>
          </Reveal>

          {/* Form */}
          <Reveal>
            <div className="relative rounded-2xl glass p-6 border-gradient sm:p-8">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex min-h-[20rem] flex-col items-center justify-center text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 12, delay: 0.05 }}
                      className="grid h-16 w-16 place-items-center rounded-full bg-aurora-gradient text-white shadow-glow"
                    >
                      <Check size={30} />
                    </motion.div>
                    <h3 className="mt-5 font-display text-xl font-semibold">Message sent!</h3>
                    <p className="mt-2 max-w-xs text-sm text-muted-foreground">
                      Thanks for reaching out — I&apos;ll get back to you soon.
                    </p>
                    <button
                      type="button"
                      onClick={reset}
                      className="mt-5 text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
                    >
                      Send another
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={onSubmit}
                    className="flex flex-col gap-4"
                  >
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="name" className="text-sm text-muted-foreground">
                          Name
                        </label>
                        <Input
                          id="name"
                          required
                          value={form.name}
                          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                          placeholder="Your name"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="text-sm text-muted-foreground">
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                          placeholder="you@email.com"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="message" className="text-sm text-muted-foreground">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        required
                        value={form.message}
                        onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                        placeholder="Tell me about it…"
                      />
                    </div>
                    <Magnetic strength={0.2} className="mt-1 self-start">
                      <Button type="submit" size="lg" disabled={status === 'loading'}>
                        {status === 'loading' ? (
                          <>
                            <Loader2 size={16} className="animate-spin" /> Sending…
                          </>
                        ) : (
                          <>
                            Send message <Send size={16} />
                          </>
                        )}
                      </Button>
                    </Magnetic>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
