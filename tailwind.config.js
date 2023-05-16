/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      current: "currentColor",
      marshmallow: "hsl(45, 100%, 97%)",
      liquorice: "hsl(0, 4%, 11%)",
      mango: "hsl(61, 100%, 74%)",
      berry: "hsl(313, 70%, 76%)",
      berrypop: "hsl(313, 70%, 91%)",
    },
    fontFamily: {
      Roobert: ["Roobert TRIAL", "sans-serif"],
      sans: ["Quicksand", "sans-serif"],
    },
  },
  plugins: [],
};
