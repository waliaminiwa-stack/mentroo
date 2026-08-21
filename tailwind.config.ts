import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Brand CI
        void: '#08090A',
        brand: {
          dark: '#15253d',
          'dark-muted': '#1e3356',
        },
        signal: {
          DEFAULT: '#639339',
          dark: '#567d31',
          darker: '#4a6d29',
          light: '#d4edb4',
          muted: '#8ab862',
        },
        // Dark surface system
        surface: {
          DEFAULT: '#0F1113',
          1: '#101214',
          2: '#141618',
          3: '#191C1F',
          4: '#202326',
        },
        // Light section backgrounds
        canvas: '#f7f8fa',
        shade: '#eef1f5',
        // Text tokens — dark sections
        hi: '#FFFFFF',
        mid: '#A7ADB4',
        lo: '#6F767D',
        // Text tokens — light sections
        ink: {
          DEFAULT: '#15253d',
          mid: '#4a6278',
          lo: '#7d93a8',
        },
        // Borders — dark sections
        border: {
          DEFAULT: 'rgba(255,255,255,0.06)',
          subtle: 'rgba(255,255,255,0.04)',
          strong: 'rgba(255,255,255,0.10)',
        },
        // Keep mist for backward compat on inputs
        mist: '#F7F8FB',
      },
      fontFamily: {
        display: ['var(--font-grotesk)', 'sans-serif'],
        body: ['var(--font-dm)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '9xl': ['8rem', { lineHeight: '1', letterSpacing: '-0.04em' }],
        '10xl': ['10rem', { lineHeight: '1', letterSpacing: '-0.04em' }],
      },
      keyframes: {
        'pulse-ring': {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.1', transform: 'scale(1.15)' },
        },
        'slide-in-right': {
          from: { opacity: '0', transform: 'translateX(20px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'pulse-ring': 'pulse-ring 2.5s ease-in-out infinite',
        'slide-in-right': 'slide-in-right 0.4s ease-out forwards',
        shimmer: 'shimmer 2.5s linear infinite',
        marquee: 'marquee 28s linear infinite',
      },
    },
  },
  plugins: [],
}

export default config
