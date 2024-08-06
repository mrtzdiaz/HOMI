/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'redH' : '#F64462',
        'blueH' : '#00A491',
        'blackH' : '#141516',
        'yellowH': '#FFC047',
      },
      transitionProperty: {
        'max-height': 'max-height'
      }
    },
  },
  plugins: [],
}
