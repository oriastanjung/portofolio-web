/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        "white" : "#E5E9F2",
        "black" : "#232631",
        "bgWhite" : "#F6F8FD",
        "bgBlack" : "#34364A",
        "customPurple" : "#9772FB",
        "customGreen" : "#00BDAA",
        "customRed" : "#F32424",
        "customBlue" : "#4353AA",
        "customOrange" : "#F44C17",
        "customDarkGreen" : "#47BB8E"
      },
    },
  },
  plugins: [],
}

