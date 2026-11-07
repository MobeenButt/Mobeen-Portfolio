/**
 * Brand accent gradient — the single "mix color" used across the whole site.
 * The electric triad: cyan -> violet -> rose.
 * Update here to re-skin the entire portfolio.
 */
export const accentGradient = {
  stops: ['#22d3ee', '#8b5cf6', '#f43f5e'] as const,
  css: 'linear-gradient(135deg, #22d3ee 0%, #8b5cf6 50%, #f43f5e 100%)',
}
