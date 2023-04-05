/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: ["aqua"],
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "form-background":
          "url('https://ik.imagekit.io/e5ixuxrlb/Udbhav/formBack.png?updatedAt=1680457028910')",
        "home-background":
          "url('https://ik.imagekit.io/e5ixuxrlb/Udbhav/homeBack.png?updatedAt=1680685345682')",
      },
    },
  },
  plugins: [require("daisyui")],
};
