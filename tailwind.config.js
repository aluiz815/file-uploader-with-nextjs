module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'poppins': ['Poppins']
    },
    extend: {
      backgroundImage: theme => ({
        'bg-Image': "url('/assets/image.svg')",
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
