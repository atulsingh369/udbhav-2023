/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: ["dark"],
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "form-background":
          "url('https://ik.imagekit.io/e5ixuxrlb/Udbhav/formBack.png?updatedAt=1680457028910')",
      },
    },
  },
  plugins: [require("daisyui")],
};
