/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        blur: 'url(src/assets/bg-blur.png)',
      },
      fontFamily: {
        sans: 'Roboto, sans-serif',
        code: 'Fira Code, monospace',
      },
    },
  },
  plugins: [],
};
