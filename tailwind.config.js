/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      marshmallow: "hsl(45, 100%, 97%)",
      liquorice: "hsl(0, 4%, 11%)",
      mango: "hsl(11, 80%, 60%)",
    },
    fontFamily: {
      sans: ["Quicksand", "sans-serif"],
    },
  },
  plugins: [],
};
