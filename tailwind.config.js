/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        'bg-black-24': '#242424',
      },
      backgroundImage: {
        'app-logo': "url('/src/assets/images/topbar.png')",
      },
    },
  },
  plugins: [],
};