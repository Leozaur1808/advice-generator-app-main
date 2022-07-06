/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens:{
      sm: '375px',
      lg: '1440px'
    },
    extend: {
      colors: {
        lightCyan:'hsl(193, 38%, 86%)',
        neonGreen:'hsl(150, 100%, 66%)',
        grayishBlue:'hsl(217, 19%, 38%)',
        darkGrayishBlue:'hsl(217, 19%, 24%)',
        darkBlue: 'hsl(218, 23%, 16%)',
      },
      fontFamily: {
        'manrope': ['Manrope', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0px 0px 25px 0px hsl(150, 100%, 66%)',
      }
    },
  },
  plugins: [],
}
