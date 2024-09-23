const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      backgroundImage: {
        welcome: 'url("./images/welcome.png")',
        // 'footer-texture': "url('/img/footer-texture.png')",
      },
      colors: {
        "dblue": '#09002B',
        "lblue": '#183180',
        "light_blue": "#004EC4",
        "dark_blue": "#04142F",
        secondary: "#202E46",
        yellow: "#F5A302",
        silver: "#596476",
        hover: "#C5DFC4",
        light: "#FAFAFA",
        fade: "#91B3E6",
        lint: "#EBF3FE",
        blue: "#002358",
        dark: "#121212",
        red: "#FF3954",
        lit: "#EBECEE",
        dim: "#3E4A5F",
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}
