/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./index.html", "./src/**/*.{vue, js, ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans]
      }
    },
    colors: {
      "brand-gray-1": "#dadce0",
      "brand-blue-1": "#19672d",
      "brand-green-1": "#137333"
    }
  },
  plugins: []
}

