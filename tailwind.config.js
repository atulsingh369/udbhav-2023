/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: ["synthwave"],
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
