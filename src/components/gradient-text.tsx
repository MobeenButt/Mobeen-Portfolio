import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface GradientTextProps {
  children: ReactNode
  animated?: boolean
  className?: string
}

/** Brand gradient text. Pass `animated` for the panning shimmer variant. */
export function GradientText({ children, animated, className }: GradientTextProps) {
  return (
    <span className={cn(animated ? 'text-gradient-animated' : 'text-gradient', className)}>
      {children}
    </span>
  )
}
