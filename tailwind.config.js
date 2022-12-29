/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'dark-custome': '#0F1928',
        'section': '#F6F6F6',
        'grey-card': '#F6F8FA;',
        'custume-dark-light': '#2F2F2F'
      },

      fontFamily: {
        sans: ["Poppins", 'Arial, sans-serif'],
        roboto: ['Roboto', 'Arial, sans-serif' ]
      }
    }
  },
  plugins: [],
}
