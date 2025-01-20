/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gradient-from': '#FFB84D',
        'gradient-via': '#FF7F32',
        'gradient-to': '#F56737',
      },
    },
  },
  plugins: [],
}