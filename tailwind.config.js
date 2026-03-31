/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#050d1a',
        'bg-secondary': '#070e1c',
        'bg-card': '#0a1628',
        'accent': '#29b6f6',
        'accent-dark': '#0090d4',
        'text-primary': '#ffffff',
        'text-secondary': '#90caf9',
        'text-muted': '#546e7a',
      },
      fontFamily: {
        heading: ['Georgia', 'serif'],
        body: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"Courier New"', 'Courier', 'monospace'],
      },
      maxWidth: {
        site: '1200px',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: 0, transform: 'translateY(30px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
