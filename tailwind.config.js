/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'garamond': ['"EB Garamond"', 'serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
 
    },
  },
  plugins: [],
}