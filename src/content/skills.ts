import { Braces, Boxes, Layers } from 'lucide-react'
import { DiDotnet, DiMsqlServer } from 'react-icons/di'
import {
  SiCss,
  SiDocker,
  SiExpress,
  SiFigma,
  SiFramer,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVite,
} from 'react-icons/si'
import type { SkillCategory } from './types'

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    skills: [
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'C#', icon: Braces },
      { name: 'Python', icon: SiPython },
      { name: 'HTML5', icon: SiHtml5 },
      { name: 'CSS3', icon: SiCss },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: SiReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'Redux', icon: SiRedux },
      { name: 'Framer Motion', icon: SiFramer },
      { name: 'Three.js', icon: SiThreedotjs },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express', icon: SiExpress },
      { name: '.NET', icon: DiDotnet },
      { name: 'ASP.NET Core', icon: DiDotnet },
      { name: 'Entity Framework', icon: Boxes },
      { name: 'MVC', icon: Layers },
    ],
  },
  {
    title: 'Databases & Tools',
    skills: [
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'SQL Server', icon: DiMsqlServer },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'Git', icon: SiGit },
      { name: 'Docker', icon: SiDocker },
      { name: 'Figma', icon: SiFigma },
      { name: 'Vite', icon: SiVite },
    ],
  },
]

/** Flat list used by the auto-scrolling marquee in the Skills section. */
export const marqueeSkills = skillCategories.flatMap((c) => c.skills)
