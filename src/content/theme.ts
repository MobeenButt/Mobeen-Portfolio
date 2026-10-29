/**
 * Brand accent gradient — the single "mix color" used across the whole site.
 * The Aurora triad: teal -> violet -> pink. Identical in light and dark themes.
 * Update here to re-skin the entire portfolio.
 */
export const accentGradient = {
  stops: ['#2dd4bf', '#8b5cf6', '#ec4899'] as const,
  css: 'linear-gradient(135deg, #2dd4bf 0%, #8b5cf6 50%, #ec4899 100%)',
}
