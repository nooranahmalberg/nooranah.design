/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Roobert", "sans-serif"],
      lexend: ["Lexend", "sans-serif"],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    // ...
  ],
};
