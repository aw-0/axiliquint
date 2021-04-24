module.exports = {
  theme: {
    extend: {
      colors: {
        tblue: '#1c95de',
        blurple: '#7289DA',
        egrey: '#7F7F7F'
      }
    },
  },
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
  },
  variants: {
  },
  plugins: [
  ],
}
