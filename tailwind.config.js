/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif',
        code: 'Fira Code, monospace'
      }
    },
  },
  plugins: [],
}
