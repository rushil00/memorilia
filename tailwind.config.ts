/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
        sm: '220px',
        md: "1024px",
        lg: "1025px",
        xl: '1440px',
      },
    },
    extend: {
      fontFamily: {
        sans: ["Bricolage Grotesque", "sans-serif"],
        serif: ["Boska", "serif"],
      },
      colors: {
        'purple-1': '#E7A1F2',
        'purple-2': '#7F229C',
        'lemon-1':'#FBFCB1',
        'cottonCandy': 'linear-gradient(315.4deg, #E8A8F1 15.03%, #B6F3E3 85.09%)',
      },
      height: {
          '1620': '1620px',
          '1080': '1080px',
      },
      scale: {
          '20': '0.2',
      },
      screens: {
          sm: '640px',
          md: "1024px",
          lg: "1025px",
          xl: '1440px',
      },
      width: {
          '5/11': '43.454545%',
          '6/11': '53.545455%',
      }
    },
  },
  plugins: [
    function({ addUtilities }: any) {
      const newUtilities = {
        '.custom-gradient': {
            backgroundImage: 'linear-gradient(315.4deg, #E8A8F1 15.03%, #B6F3E3 85.09%)',
        },
        '.landingPage': {
            backgroundImage: 'linear-gradient(180deg, #E7A6F2 0%, #FBFCAF 34.5%, #84EADB 67.5%, #BCF3FF 100%)',
        }
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
