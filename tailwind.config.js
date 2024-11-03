/** @type {import('tailwindcss').Config} */
const primeui = require('tailwindcss-primeui');

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neutral1-it': '#ECEFF2',
        'neutral2-it': '#E0E5EA',
        'background-it': '#F9FAFB',
        'main-it': '#2392A4',
        'main-it-muted': '#F2FBFC',
        'foreground-muted': '#54687D',
      },
    },
  },
  plugins: [primeui],
}