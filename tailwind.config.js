/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // ADD THIS SECTION:
      fontFamily: {
        scifi: ['"Orbitron"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}