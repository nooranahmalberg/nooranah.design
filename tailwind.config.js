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
      marshmallow: "hsl(45, 21%, 93%)",
      showcaseYellow: "hsl(48, 92%, 91%)",
      showcasePink: "hsl(340, 73%, 91%)",
      showcaseGreen: "hsl(120, 78%, 91%)",
      deepmoss: "hsl(156, 10%, 19%)",
      moss: "hsl(157, 6%, 36%)",
      teal100: "hsl(161, 50%, 89%)",
      teal200: "hsl(161, 50%, 67%)",
      berry: "hsl(313, 70%, 76%)",
      berrypop: "hsl(313, 70%, 91%)",
      berrydeep: "hsl(313,70%,85%)",

      // dark
      fern: 'hsl(156, 5%, 18%)',
      ivy: 'hsl(158, 6%, 26%)'
    },
    fontFamily: {
      sans: ["Roobert", "sans-serif"],
    },

  },
  plugins: [],
};
