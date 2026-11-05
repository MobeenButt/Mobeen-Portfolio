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
  roles: ['Backend Developer', 'MERN Stack Developer', '.NET Developer', 'AI Integration Developer'],
  tagline: 'I build full-stack web applications and AI-powered solutions end-to-end, from database architecture and backend APIs to intuitive user interfaces and intelligent automation, using MERN, .NET, and modern AI technologies.',
  location: 'Lahore, Pakistan',
  timezone: 'Asia/Karachi',
  email: 'mobeen914butt@gmail.com',
  resumeUrl: '#',
  available: true,
  bio: [
    "I'm a Full Stack Developer focused on building scalable web applications, robust backend systems, and AI-powered solutions. I work across the MERN stack and the .NET / ASP.NET Core ecosystem, with experience in frontend development, backend engineering, REST API development, database design, and system integration.I have completed a .NET and React JS internship at 10Pearls, gaining practical industry experience in modern software development practices. My technical expertise also extends to Python, FastAPI, LLM integration, Retrieval-Augmented Generation (RAG), LangChain, LangGraph, and AI agent development.I enjoy turning complex requirements into practical, maintainable software solutions. I value clean architecture, readable code, continuous learning, and building technology that solves real-world problems.",
    "Over the past year I've shipped several full-stack projects, and I'm always digging into the next thing - whether that's a new framework, a deeper system concept, or just a cleaner way to solve a problem. I care about writing code that's readable, maintainable, and a pleasure to use.",
  ],
  // currentlyBuilding: {
  //   title: 'A full-stack task manager',
  //   description:
  //     'A MERN + ASP.NET Core app with authentication, real-time updates, and a clean dashboard — exploring clean architecture and Entity Framework Core.',
  //   url: '#',
  // },
  socials: [
    { name: 'GitHub', url: 'https://github.com/mobeenbutt', icon: SiGithub },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/mobeen-butt/', icon: FaLinkedin },
    // { name: 'X', url: 'https://x.com/mobeenbutt', icon: SiX },
    { name: 'Email', url: 'mailto:mobeen914butt@gmail.com', icon: Mail },
  ],
}
