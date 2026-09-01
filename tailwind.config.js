/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['Geist Mono', 'Fira Code', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.025em',
        normal: '0em',
        wide: '0.04em',
        wider: '0.08em',
        widest: '0.14em',
      },
      colors: {
        cyber: {
          bg: '#060a14',
          card: '#0b1222',
          border: '#1f2e4d',
          neon: '#00f5d4',
          blue: '#3b82f6',
          purple: '#a855f7',
        }
      }
    },
  },
  plugins: [],
}
