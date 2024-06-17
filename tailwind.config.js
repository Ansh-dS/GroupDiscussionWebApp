/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,hsx,hx}"],
  theme: {
    extend: {
        fontFamily:{
          noto: ['Noto Sans', 'sans-serif'],
          lato: ['Lato', 'sans-serif'],
          roboto: ['Roboto', 'sans-serif'],
          open: ['Open Sans', 'sans-serif'],
        }
    },
  },
  plugins: [],
}

