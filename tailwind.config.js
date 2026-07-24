import typography from '@tailwindcss/typography'

export default {
  content: ['./index.html', './src/**/*.{js,jsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        cortex: {
          ink: '#08111f',
          navy: '#09264a',
          blue: '#0a64c8',
          gold: '#d69a17',
          cyan: '#13bfd1',
          lime: '#a4e96c',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif',
        ],
      },
      boxShadow: {
        glow: '0 0 80px rgba(19, 191, 209, 0.28)',
      },
    },
  },
  plugins: [typography],
}
