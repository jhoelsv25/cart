/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        'primary': '#009999',
      },
      textColor:{
        'primary': '#009999',
      }
    },
  },
  plugins: [],
}

