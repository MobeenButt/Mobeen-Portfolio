import { Award } from 'lucide-react'
import type { Certification } from './types'

export const certifications: Certification[] = [
  {
    title: 'AWS Certified Solutions Architect — Associate',
    issuer: 'Amazon Web Services',
    date: 'Mar 2024',
    credentialId: 'SAA-C03-MB2024',
    credentialUrl: '#',
    icon: Award,
  },
  {
    title: 'Meta Front-End Developer Professional',
    issuer: 'Meta',
    date: 'Aug 2023',
    credentialId: 'META-FE-MB2023',
    credentialUrl: '#',
    icon: Award,
  },
  {
    title: 'Google UX Design Professional',
    issuer: 'Google',
    date: 'Feb 2023',
    credentialId: 'GOOG-UX-MB2023',
    credentialUrl: '#',
    icon: Award,
  },
  {
    title: 'MongoDB Associate Developer',
    issuer: 'MongoDB University',
    date: 'Oct 2022',
    credentialId: 'MDB-DEV-MB2022',
    credentialUrl: '#',
    icon: Award,
  },
]
