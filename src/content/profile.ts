import { Mail } from 'lucide-react'
import { FaLinkedin } from 'react-icons/fa'
import { SiGithub, SiX } from 'react-icons/si'
import type { Profile } from './types'

/**
 * Edit this file to update your personal details. Everything else in the app
 * reads from here — changing your name, bio, or socials updates the whole site.
 */
export const profile: Profile = {
  name: 'Mobeen Butt',
  firstName: 'Mobeen',
  initials: 'MB',
  role: 'Full-Stack Developer',
  roles: ['Full-Stack Developer', 'MERN Stack Developer', '.NET Developer', 'React & Node.js Developer'],
  tagline: 'I build full-stack web apps end-to-end — from the database to the UI — with the MERN stack and .NET.',
  location: 'Lahore, Pakistan',
  timezone: 'Asia/Karachi',
  email: 'mobeen@example.com',
  resumeUrl: '#',
  available: true,
  bio: [
    "I'm a full-stack developer who builds web applications end-to-end, from database design and APIs to responsive, accessible interfaces. I work primarily across the MERN stack and the .NET / ASP.NET Core ecosystem.",
    "Over the past year I've shipped several full-stack projects, and I'm always digging into the next thing — whether that's a new framework, a deeper system concept, or just a cleaner way to solve a problem. I care about writing code that's readable, maintainable, and a pleasure to use.",
  ],
  currentlyBuilding: {
    title: 'A full-stack task manager',
    description:
      'A MERN + ASP.NET Core app with authentication, real-time updates, and a clean dashboard — exploring clean architecture and Entity Framework Core.',
    url: '#',
  },
  socials: [
    { name: 'GitHub', url: 'https://github.com/mobeenbutt', icon: SiGithub },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/mobeen-butt/', icon: FaLinkedin },
    { name: 'X', url: 'https://x.com/mobeenbutt', icon: SiX },
    { name: 'Email', url: 'mailto:mobeen@example.com', icon: Mail },
  ],
}
