/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,jsx}",
    "node_modules/flowbite-react/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#fafafa",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
