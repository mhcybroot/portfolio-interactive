/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#080d1a',
          surface: '#0d1527',
          card: '#121d36',
          border: '#1f2e4d',
          cyan: '#00f5d4',
          cyanGlow: '#00f5d433',
          blue: '#3b82f6',
          indigo: '#6366f1',
          purple: '#a855f7',
          pink: '#ec4899',
          amber: '#f59e0b',
        }
      },
      fontFamily: {
        mono: ['Fira Code', 'JetBrains Mono', 'Courier New', 'monospace'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 15px rgba(0, 245, 212, 0.2)' },
          '100%': { boxShadow: '0 0 30px rgba(0, 245, 212, 0.6)' },
        }
      }
    },
  },
  plugins: [],
}
