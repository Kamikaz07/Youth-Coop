/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#c8144e', // Red/Pink
        secondary: '#251f55', // Dark Blue
        cyan: '#36c1cd',
        yellow: '#ffc914',
        orange: '#e4572e',
        dark: '#252525',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}