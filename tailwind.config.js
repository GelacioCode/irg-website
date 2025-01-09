/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00A2b1", // Add your custom color
      },
      screens: {
        'md-custom': { max: '1080px', min: '770px' }, // Custom breakpoint
      },
    },
  },
  plugins: [],
}