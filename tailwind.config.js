// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      screens: {
        'mb': {'max': '760px'}, // max-width 760px
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',   // slower spin
      },
    },
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [],
}
