/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Editorial Executive palette — keep tokens in sync with globals.css
        'ink':        '#0e0d0b',
        'ink-deep':   '#08080a',
        'ink-warm':   '#14110d',
        'bone':       '#ebe5d8',
        'bone-muted': '#b8b1a3',
        'slate':      '#75716a',
        'whisper':    '#4a4742',
        'gold':       '#c9a86a',
        'oxblood':    '#8b3a3a',
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'Cormorant Garamond', 'Georgia', 'serif'],
        body:    ['var(--font-inter)', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono:    ['var(--font-mono)', 'JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        site: '1240px',
      },
    },
  },
  plugins: [],
}
