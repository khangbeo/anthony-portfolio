const colors = require("tailwindcss/colors");
module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      transitionDuration: {
        0: "0ms",
        2000: "2000ms",
        4000: "4000ms",
      },
    },
    dropShadow: {
      'sm': '0px 1px 1px rgba(0, 0, 0, 0.05)',
      '3xl': '4px 8px 10px rgba(0, 0, 0.2, 0.50)',
    },
  },
  variants: {
    extend: {},
    display: ["responsive", "group-hover", "group-focus"],
  },

  plugins: [],
};
