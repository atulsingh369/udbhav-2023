/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: ["aqua"],
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "pathik-form-background":
          "url('https://ik.imagekit.io/e5ixuxrlb/Udbhav/pathikForm.png?updatedAt=1680770543085')",
        "pathik-form-background-light":
          "url('https://ik.imagekit.io/e5ixuxrlb/Udbhav/pathikFormLight.png?updatedAt=1680770617660')",
        "form-background":
          "url('https://ik.imagekit.io/e5ixuxrlb/Udbhav/formBack.png?updatedAt=1680457028910')",
        "home-background":
          "url('https://ik.imagekit.io/e5ixuxrlb/Udbhav/herobg.png?updatedAt=1680952991336')",
        "group-dance":
          "url('https://ik.imagekit.io/e5ixuxrlb/Udbhav/groupDance.png?updatedAt=1680722733157')",
        "profile-events-registered-background":
          "url('https://ik.imagekit.io/e5ixuxrlb/Udbhav/profileRegisterd.png?updatedAt=1680867639747')",
      },
    },
  },
  plugins: [require("daisyui")],
};
