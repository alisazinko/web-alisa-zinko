import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          DEFAULT: '#5B58D6',
          dark: '#4a47c0',
          light: '#7b79e0',
        },
        bg: {
          hero: '#F5EDE8',
          section: '#E8E8E3',
          card: '#FFFFFF',
        },
      },
      fontFamily: {
        serif: ['"Crimson Pro"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['4.375rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'h2': ['2.75rem', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
      },
    },
  },
  plugins: [],
}
export default config
