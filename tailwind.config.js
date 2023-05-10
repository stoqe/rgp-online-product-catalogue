/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_includes/**/*.{html,js,njk,md}',
    './components/**/*.{html,js,njk,md}',
    './experimental/**/*.{html,js,njk,md}',
    './layouts/**/*.{html,js,njk,md}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

