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
    colors: {
      current: "currentColor",
      mushroom100: "hsl(45, 21%, 100%)",
      mushroom200: "hsl(45, 21%, 96%)",
      mushroom250: "hsl(45, 21%, 90%)",
      mushroom300: "hsl(45, 21%, 85%)",
      mushroom400: "hsl(45, 21%, 75%)",
      blue700: "hsl(220, 30%, 40%)",
      moss700: "hsl(157, 6%, 40%)",
      moss800: "hsl(157, 6%, 33%)",
      moss900: "hsl(156, 10%, 25%)",
      feather: "hsl(161, 50%, 67%)",
      mango: "hsl(42, 89%, 84%)",

      // dark
      sprout: "hsl(158, 6%, 80%)",
      clover: "hsl(158, 6%, 60%)",
      leaf: "hsl(158, 6%, 40%)",
      ivy: "hsl(158, 6%, 23%)",
      vine: "hsl(157, 6%, 37%)",
      fern: "hsl(156, 5%, 18%)",
      antiblue700: "hsl(353, 48%, 57%)",
      antiheroBlue: "hsl(194, 32%, 90%)",
      antiFeather: "hsl(161, 50%, 30%)",
      antiMango: "hsl(42, 89%, 40%)",
      clay: "#A34D56",
    },
    fontFamily: {
      sans: ["Roobert", "sans-serif"],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    // ...
  ],
};
