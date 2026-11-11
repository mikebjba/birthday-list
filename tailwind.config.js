/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFCF7',
          100: '#F7F4EB',
          200: '#EFEAD8',
        },
        forest: {
          800: '#1B3B2B',
          900: '#0F291E',
        },
        gold: {
          500: '#D4AF37',
          600: '#AA820A',
        }
      }
    },
  },
  plugins: [],
}
