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
        "lblue": '#183180'
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}
