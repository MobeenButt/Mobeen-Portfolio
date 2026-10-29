import { useEffect } from 'react'
import { AuroraBackground } from '@/components/aurora-background'
import { BackToTop } from '@/components/back-to-top'
import { CommandPalette } from '@/components/command-palette'
import { Cursor } from '@/components/cursor'
import { Header } from '@/components/Header'
import { ScrollProgress } from '@/components/scroll-progress'
import { About } from '@/components/sections/About'
import { Certifications } from '@/components/sections/Certifications'
import { Contact } from '@/components/sections/Contact'
import { Experience } from '@/components/sections/Experience'
import { Footer } from '@/components/sections/Footer'
import { Hero } from '@/components/sections/Hero'
import { Projects } from '@/components/sections/Projects'
import { Skills } from '@/components/sections/Skills'
import { Stats } from '@/components/sections/Stats'
import { initSmoothScroll } from '@/lib/smooth-scroll'
import { ThemeProvider } from '@/providers/theme-provider'

export default function App() {
  useEffect(() => initSmoothScroll(), [])

  return (
    <ThemeProvider>
      <AuroraBackground />
      <ScrollProgress />
      <Cursor />
      <Header />
      <main className="relative">
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <CommandPalette />
    </ThemeProvider>
  )
}
