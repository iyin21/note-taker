/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        black:{
          100:"rgba(0, 0, 0, 0.6)"
        }, 
        white:{
          100:"#ffffff"
        }
        
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
    },
    },
  },
  plugins: [],
}

