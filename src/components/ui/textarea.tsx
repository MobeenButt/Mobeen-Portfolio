import { forwardRef, type TextareaHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        'flex min-h-28 w-full rounded-xl bg-card px-4 py-3 text-sm text-foreground placeholder:text-faint-foreground transition-colors duration-200',
        'border border-border focus-visible:border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-y',
        className,
      )}
      {...props}
    />
  ),
)
Textarea.displayName = 'Textarea'
