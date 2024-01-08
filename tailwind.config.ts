// tailwind.config.js

module.exports = {
  content: [
    "./Index.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        salt: {
          blue: '#183D5A',
          gold: '#BF9461',
        }
      }
    },
  },
  plugins: [],
}