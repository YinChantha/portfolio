/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    fontFamily: {
      abhaya: ["Abhaya Libre", "serif"],
    },
    fontWeight: {
      semibold: "600",
    },
  },
  extend: {
    animation: {
      marquee: "marquee 25s linear infinite",
    },
    keyframes: {
      marquee: {
        "0%": { transform: "translateX(0%)" },
        "100%": { transform: "translateX(-100%)" },
      },
    },
  },
  plugins: [],
};
