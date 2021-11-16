module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: ['active'],
      colors: {
        'white-primary': '#b2becd',
        'sky-blue': '#49bafb',
        'modal-background': '#00000080',
        black: {
          light: '#2a2e35',
          medium: '#12181b',
          dark: '#020203',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
