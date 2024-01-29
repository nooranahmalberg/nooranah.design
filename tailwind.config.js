/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      screens: {
        DEFAULT: '1400px',
        // sm: '640px',
        // md: '768px',
        // lg: '1024px',
        // xl: '1400px',
      //  ['2xl']: '1536px',
      },
      padding: {
        DEFAULT: '16px',
        md: '64px',
      }
    },
    colors: {
      current: "currentColor",
      snow: 'hsl(45, 30%, 99%)',
      mushroom: 'hsl(42, 20%, 85%)',
      marshmallow: "hsl(45, 21%, 92%)",
      liquorice: "hsl(157, 6%, 16%)",
      moss: "hsl(157, 6%, 36%)",
      yellow: "hsl(37, 96%, 90%)",
      berry: "hsl(313, 70%, 76%)",
      berrypop: "hsl(313, 70%, 91%)",
      berrydeep: "hsl(313,70%,85%)",

      // dark
      fern: 'hsl(156, 5%, 18%)',
      ivy: 'hsl(158, 6%, 26%)'
    },
    fontFamily: {
      sans: ["Roobert", "sans-serif"],
      serif: ["ITC Cheltenham", "serif"],
    },
  },
  plugins: [],
};
