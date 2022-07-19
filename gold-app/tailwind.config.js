/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}","'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'",],
  theme: {
    extend: {
      width: {
        '668': '668px',
        '613': '613px',
      },
      height: {
        '326' : '326px',
        '54' : '54px',
      },
      colors: {
        'binar-blue' : '#0D28A6',
        'light-lavender' : '#F1F3FF',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
