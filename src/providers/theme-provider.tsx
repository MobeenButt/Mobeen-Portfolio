import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import type { ThemeMode } from '@/content/types'

interface ThemeContextValue {
  theme: ThemeMode
  toggleTheme: () => void
  setTheme: (theme: ThemeMode) => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

/** Apply a theme to <html>, with a brief crossfade transition. */
function applyTheme(theme: ThemeMode) {
  const root = document.documentElement
  root.classList.add('theme-transition')
  root.classList.toggle('dark', theme === 'dark')
  root.setAttribute('data-theme', theme)
  window.setTimeout(() => root.classList.remove('theme-transition'), 500)
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    if (typeof document === 'undefined') return 'dark'
    return (document.documentElement.getAttribute('data-theme') as ThemeMode) ?? 'dark'
  })

  // Follow the system preference when the user hasn't chosen one.
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = () => {
      if (!localStorage.getItem('theme')) {
        const next: ThemeMode = mq.matches ? 'dark' : 'light'
        setThemeState(next)
        applyTheme(next)
      }
    }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const setTheme = (next: ThemeMode) => {
    setThemeState(next)
    localStorage.setItem('theme', next)
    applyTheme(next)
  }
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within a ThemeProvider')
  return ctx
}
