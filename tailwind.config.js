module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      'white-primary': '#b2becd',
      black: {
        light: '#2a2e35',
        medium: '#12181b',
        dark: '#020203',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
