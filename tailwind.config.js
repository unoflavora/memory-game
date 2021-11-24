module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        atkinson: ['Atkinson Hyperlegible', 'sans-serif']
      },
      colors: {
        memory:{
          orange: '#FDA214',
          lightorange: '#FFB84A',
          gray: '#DFE7EC',
          white: '#FCFCFC',
          lightblue: '#BCCED9',
          darkblue: '#7191A5',
          darkerblue: '#304859',
          softblue: '#6395B8',
          black: '#152938'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
