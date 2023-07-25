/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      spacing: {
        '128': "36rem",
      },
      colors: {
        primary: "#303030",
        gray: {
          700: "#3b3b3b",
          800: "#2b2b2b",
        },
        cyan: {
          400: "#37d5c4",
          500: "#2ccfbe",
          600: "#29c1b1"
        }
      },
    },
  },
  plugins: [],
}