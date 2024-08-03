/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Specified the font-family type
        sans: ['Roboto', 'sans-serif'],
      },
      // Grid class for the details page will be 70(left column)/30(Right column).
      // 70 and 20% space. 
      gridTemplateColumns:{
        '70/30': '70% 28%',
      },
    },
  },
  plugins: [],
}

