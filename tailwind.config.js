/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}

module.exports = {
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('\client\public\images\restaurant.jpg')",
        'footer-texture': "url('\client\public\images\restaurant.jpg')",
      }
    }
  }
}