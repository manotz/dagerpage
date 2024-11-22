/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{ts,js,jsx,tsx}"],
  theme: {
    extend: {
       colors:{
          primaryColor: "#02010a"
       },
       fontFamily:{
        roboto:["Roboto", "sans-serif"],
        oswald:["Oswald", "sans-serif"],
       }
    },
  },
  plugins: [],
}

