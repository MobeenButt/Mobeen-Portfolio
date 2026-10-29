import type { ComponentType } from 'react'

/**
 * Any icon component (react-icons, lucide). Kept permissive on purpose so both
 * libraries — which type their props differently — assign cleanly into content.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type IconType = ComponentType<any>

export type ThemeMode = 'light' | 'dark'

export interface Social {
  name: string
  url: string
  icon: IconType
}

export interface Profile {
  name: string
  firstName: string
  initials: string
  role: string
  /** Roles cycled by the hero typewriter. */
  roles: string[]
  tagline: string
  location: string
  /** IANA timezone, e.g. "Asia/Karachi", used for the live clock. */
  timezone: string
  email: string
  resumeUrl: string
  available: boolean
  bio: string[]
  currentlyBuilding: {
    title: string
    description: string
    url?: string
  }
  socials: Social[]
}

export interface Skill {
  name: string
  icon: IconType
  /** Optional proficiency 0-100 for an accent bar. */
  level?: number
}

export interface SkillCategory {
  title: string
  skills: Skill[]
}

export interface ExperienceEntry {
  role: string
  company: string
  period: string
  location: string
  url?: string
  description: string
  highlights: string[]
  tech: string[]
}

export interface Project {
  title: string
  description: string
  longDescription?: string
  tags: string[]
  /** Tech stack used for filtering; shown as chips. */
  tech: string[]
  liveUrl?: string
  codeUrl?: string
  featured: boolean
  /** Optional gradient pair [from, to] used as the card thumbnail. */
  accent?: [string, string]
}

export interface Certification {
  title: string
  issuer: string
  date: string
  credentialId?: string
  credentialUrl?: string
  icon?: IconType
}

export interface Stat {
  label: string
  value: number
  suffix?: string
}

export interface NavItem {
  id: string
  label: string
}
