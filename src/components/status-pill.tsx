import { cn } from '@/lib/utils'

/** "Available for work" pill with a pulsing dot. Pass `available` to show/hide. */
export function StatusPill({ available, className }: { available: boolean; className?: string }) {
  if (!available) return null
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs font-medium text-muted-foreground',
        className,
      )}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-glow-pulse rounded-full bg-emerald-400" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
      </span>
      <span>Available for work</span>
    </span>
  )
}
