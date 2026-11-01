/** @type {import('tailwindcss').Config} */
// Portado do antigo `tailwind.config = { darkMode: 'class' }` inline (Play CDN 3.4.17, sem plugins).
module.exports = {
  content: ['./*.html', './assets/js/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
};
