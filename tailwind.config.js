/** @type {import('tailwindcss').Config} */
module.exports = {
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
      oyster: "hsl(45, 30%, 99%)",
      enoki: "hsl(45, 21%, 93%)",
      portabella: "hsl(42, 20%, 85%)",
      shiitake: "hsl(42, 20%, 75%)",
      heroYellow: "hsl(48, 93%, 91%)",
      heroPink: "hsl(340, 60%, 92%)",
      heroBlue: "hsl(113, 32%, 90%)",
      deepmoss: "hsl(156, 10%, 25%)",
      moss: "hsl(157, 6%, 33%)",
      feather: "hsl(161, 50%, 67%)",

      // dark
      sprout: "hsl(158, 6%, 80%)",
      clover: "hsl(158, 6%, 60%)",
      leaf: "hsl(158, 6%, 40%)",
      ivy: "hsl(158, 6%, 23%)",
      vine: "hsl(157, 6%, 37%)",
      fern: "hsl(156, 5%, 18%)",
      antiheroYellow: "hsl(30, 55%, 59%)",
      antiheroPink: "hsl(353, 48%, 57%)",
      antiheroBlue: "hsl(194, 32%, 90%)",
      antiFeather: "hsl(161, 50%, 30%)",
    },
    fontFamily: {
      sans: ["Roobert", "sans-serif"],
    },
  },
  plugins: [],
};
