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
      snow: "hsl(45, 30%, 99%)",
      marshmallow: "hsl(45, 21%, 93%)",
      mushroom: "hsl(42, 20%, 85%)",
      ground: "hsl(42, 20%, 75%)",
      heroYellow: "hsl(48, 92%, 91%)",
      heroPink: "hsl(340, 73%, 91%)",
      heroGreen: "hsl(120, 78%, 91%)",
      deepmoss: "hsl(156, 10%, 19%)",
      moss: "hsl(157, 6%, 36%)",
      teal: "hsl(161, 50%, 67%)",

      // dark
      fern: "hsl(156, 5%, 18%)",
      ivy: "hsl(158, 6%, 26%)",
      antiheroYellow: "hsl(38, 80%, 70%)",
      antiheroPink: "hsl(353, 48%, 57%)",
      antiheroGreen: "hsl(117, 10%, 50%)",
    },
    fontFamily: {
      sans: ["Roobert", "sans-serif"],
    },
  },
  plugins: [],
};
