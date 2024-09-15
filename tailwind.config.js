/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'main-green':'#11977E',
        'sub-green': '#01876E',
        'custom-dark': '#313131',
        'title-color':'#4E4E4E',
        'darker-color':'#A29999',
        'lighter-color':'#D6D6D6',
        'custom-dark': '#1A1A1A'
      }
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
}