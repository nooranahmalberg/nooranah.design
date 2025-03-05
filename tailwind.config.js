/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{html,js,jsx,tsx}",
    "./_layouts/**/*.html",
    "./_includes/**/*.html",
    "./notes.html",
    "./_notes/**/*.{html,md}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        DEFAULT: "1200px",
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
        brandForest: "hsl(180,64,23)",
        brandMango: "hsl(50,100,84)",
        mutedForest: "hsl(180,60,84)",
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
