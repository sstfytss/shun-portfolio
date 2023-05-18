/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'landscape': "url('../public/background.png')",
      }
    },
    fontFamily: {
      signature: ["Great Vibes"]
    },
  },
  plugins: [],
}

