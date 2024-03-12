/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'xl': '1600px', // Change this value according to your requirements
      },
    },
    fontFamily: {
      marlinge: ["marlinge", "sans-serif"],
    },
  },
  daisyui: {
    themes: ["halloween"],
  },
  plugins: [require("daisyui")],
};
