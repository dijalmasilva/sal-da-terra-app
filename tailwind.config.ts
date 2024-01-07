// tailwind.config.js

module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
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