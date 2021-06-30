const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Noto Sans JP', ...defaultTheme.fontFamily.sans],
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
