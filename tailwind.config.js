const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        code: ['Source Code Pro']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require(`@tailwindcss/forms`),
    require(`@tailwindcss/typography`),
    require(`@tailwindcss/aspect-ratio`),
  ],
}
