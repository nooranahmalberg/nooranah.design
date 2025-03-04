/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      screens: {
        DEFAULT: "1400px",
        // sm: '640px',
        // md: '768px',
        // lg: '1024px',
        // xl: '1400px',
        //  ['2xl']: '1536px',
      },
      padding: {
        DEFAULT: "16px",
        md: "64px",
      },
    },
    extend: {
      colors: {
        brandForest: "#156060",
        brandMango: "#FFF1AB",
        mutedMango: "hsl(50,60,93)",
      },
      fontFamily: {
        sans: ["Lexend", "sans-serif"],
        Roobert: ["Roobert", "sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    // ...
  ],
};
