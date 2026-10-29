import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { GradientText } from './gradient-text'
import { Reveal } from './reveal'

interface SectionHeadingProps {
  index: string        // e.g. "01"
  title: string
  subtitle?: ReactNode
  centered?: boolean
  className?: string
}

/**
 * Consistent section header used across every section.
 *
 * Renders as:
 *   01 / Title
 *   subtitle paragraph
 */
export function SectionHeading({ index, title, subtitle, centered, className }: SectionHeadingProps) {
  return (
    <div className={cn(centered && 'text-center', 'mb-12 lg:mb-16', className)}>
      <Reveal>
        <p className="mb-2 font-mono text-xs tracking-widest uppercase text-muted-foreground select-none">
          <GradientText>{index}</GradientText>
          <span className="mx-2 opacity-40">/</span>
          <span>{title}</span>
        </p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="font-display text-3xl font-semibold md:text-4xl lg:text-5xl">
          <GradientText animated>{title}</GradientText>
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p className="mt-4 max-w-xl text-muted-foreground leading-relaxed md:text-lg mx-auto">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  )
}
