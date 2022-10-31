/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      "font-inter": ['Inter', 'sans-serif'],
      "judge": ['F37Judge', 'system-ui'],
    },
    extend: {
      colors: {
        "purple": '#260C49',
        "green": '#489b26',
      }
    },
  },
  plugins: [],
}
