import tailwindcssAnimate from 'tailwindcss-animate'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        '2xl': '1200px',
      },
    },
    extend: {
      colors: {
        background: 'var(--bg)',
        'background-soft': 'var(--bg-soft)',
        foreground: 'var(--text)',
        'muted-foreground': 'var(--text-muted)',
        'faint-foreground': 'var(--text-faint)',
        card: 'var(--surface)',
        'card-strong': 'var(--surface-strong)',
        border: 'var(--border)',
        'border-strong': 'var(--border-strong)',
        ring: 'var(--aurora-2)',
        'aurora-1': 'var(--aurora-1)',
        'aurora-2': 'var(--aurora-2)',
        'aurora-3': 'var(--aurora-3)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'aurora-gradient':
          'linear-gradient(135deg, var(--aurora-1) 0%, var(--aurora-2) 50%, var(--aurora-3) 100%)',
        'aurora-gradient-soft':
          'linear-gradient(135deg, var(--aurora-1), var(--aurora-3))',
        'aurora-radial':
          'radial-gradient(circle at 30% 30%, var(--aurora-1), transparent 60%), radial-gradient(circle at 70% 60%, var(--aurora-3), transparent 60%)',
        'grid-pattern':
          'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '48px 48px',
      },
      boxShadow: {
        glow: '0 0 50px -12px var(--aurora-2)',
        'glow-sm': '0 0 22px -10px var(--aurora-2)',
        card: '0 18px 50px -24px var(--shadow-color)',
        'card-hover': '0 26px 60px -22px var(--shadow-color)',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      keyframes: {
        'aurora-drift': {
          '0%, 100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '33%': { transform: 'translate3d(4%, -6%, 0) scale(1.08)' },
          '66%': { transform: 'translate3d(-5%, 4%, 0) scale(0.96)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.15)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'gradient-pan': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'spin-slow': {
          to: { transform: 'rotate(360deg)' },
        },
        'border-spin': {
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'aurora-drift': 'aurora-drift 18s ease-in-out infinite',
        marquee: 'marquee 38s linear infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        'glow-pulse': 'glow-pulse 2.6s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        'gradient-pan': 'gradient-pan 8s ease infinite',
        'spin-slow': 'spin-slow 14s linear infinite',
        'border-spin': 'border-spin 4s linear infinite',
      },
    },
  },
  plugins: [tailwindcssAnimate],
}
