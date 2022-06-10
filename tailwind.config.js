const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js}",
  ],
  theme: {
    fontFamily: {
      Poppins: ['poppins', "sans-serif"],
    },
    extend: {
      screens: {
        "xs": '350px',
        ...defaultTheme.screens
      },
      height: {
        '90v': '80vh',
        '70v': '70vh'
      }
    },
  },
}