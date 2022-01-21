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
    backgroundImage: {
      img: `url('../public/bg.png'),
      linear-gradient(to bottom, #111827, #111827, #111827, #111827, #111827, #131624, #141421, #15121e, #140d17, #110910, #0b0407, #000000)`,
    },
    fontFamily: {
      'title': ['Montserrat', 'sans-serif'],
    }
  },
  variants: {
    extend: {},
    display: ["responsive", "group-hover", "group-focus"],
  },

  plugins: [],
};
