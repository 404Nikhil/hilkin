/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Geist Mono"', 'monospace'], // for monospace class
        sans: ['"Geist Mono"', 'sans-serif'], // optional: make it the main font
      },
    },
  },
  plugins: [],
};