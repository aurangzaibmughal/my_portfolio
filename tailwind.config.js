/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lime: {
          DEFAULT: '#a3e635',
          dark: '#84cc16',
          muted: '#365314',
        },
        dark: {
          DEFAULT: '#0a0a0a',
          card: '#111111',
          border: '#1a1a1a',
        },
      },
      fontFamily: {
        display: ['Bebas Neue', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        lime: '0 8px 32px rgba(163, 230, 53, 0.08)',
        'lime-glow': '0 0 40px rgba(163, 230, 53, 0.20)',
      },
    },
  },
  plugins: [],
}
