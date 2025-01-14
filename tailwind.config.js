/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#FFD700"
      }
    },

  },
  plugins: [require("tw-elements/plugin.cjs")],
  darkMode: "class"
};

