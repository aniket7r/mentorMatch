module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#FFF78A',
        secondary: '#FFE382',
        accent: '#FFC47E',
        highlight: '#FFAD84'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
