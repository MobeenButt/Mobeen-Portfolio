const NOISE =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"

/**
 * Fixed full-screen atmosphere behind all content: a faded grid, three drifting
 * aurora blobs, and a fine noise/grain overlay. Purely decorative.
 */
export function AuroraBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Faded dot/line grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />

      {/* Drifting aurora blobs */}
      <div
        className="absolute -left-32 -top-40 h-[42rem] w-[42rem] rounded-full bg-aurora-1 opacity-[var(--aurora-opacity)] blur-[130px] animate-aurora-drift"
        style={{ animationDelay: '0s' }}
      />
      <div
        className="absolute -right-40 top-1/3 h-[38rem] w-[38rem] rounded-full bg-aurora-2 opacity-[var(--aurora-opacity)] blur-[130px] animate-aurora-drift"
        style={{ animationDelay: '-6s' }}
      />
      <div
        className="absolute -bottom-32 left-1/4 h-[36rem] w-[36rem] rounded-full bg-aurora-3 opacity-[var(--aurora-opacity)] blur-[130px] animate-aurora-drift"
        style={{ animationDelay: '-12s' }}
      />

      {/* Fine grain overlay (hides banding, adds texture) */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{ backgroundImage: NOISE }}
      />
    </div>
  )
}
