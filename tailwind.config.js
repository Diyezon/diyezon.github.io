/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff1f5',
          100: '#ffe4ec',
          200: '#ffc9dd',
          300: '#ff9dc2',
          400: '#ff5c9a',
          500: '#ff1677',
          600: '#eb0c64',
          700: '#c70652',
          800: '#a50847',
          900: '#88093c',
        }
      }
    },
  },
  plugins: [],
};