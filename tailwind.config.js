/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: ["dark"],
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        samarkan:
          "url('url(//db.onlinewebfonts.com/c/f56de887103fafbc50b8d846974cd5d4?family=Samarkan)')",
      },
      backgroundImage: {
        "form-background":
          "url('https://ik.imagekit.io/e5ixuxrlb/Udbhav/formBack.png?updatedAt=1680457028910')",
        "home-background":
          "url('https://ik.imagekit.io/e5ixuxrlb/Udbhav/homeBack.png?updatedAt=1680502388551')",
      },
    },
  },
  plugins: [require("daisyui")],
};
