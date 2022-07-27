/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FF7A00",

          secondary: "#fc9c0a",

          accent: "#FFC38C",

          neutral: "#1c1917",

          "base-100": "#fffcfa",

          info: "#3ABFF8",

          success: "#22c55e",

          warning: "#fde047",

          error: "#ef4444",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
