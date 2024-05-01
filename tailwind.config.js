/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whiteTheme: {
          primaryColor: "#5349C3",
          backgroundColor: "#F8FBFF",
          secondColor: "#ffffff",
          accentBlue: "#7B8D9F",

          accentDark: "#435755",
          lightAccent: "#E7F2FF",
          textColor: "#000000",
        },
        darkTheme: {
          primaryColor: "#0F172A",
          borderColor: "#283249",
          textColor: "#ffffff",
          secondColor: "#8FCFFF",
          greenAccent: "#EFF5F4",
          accentDark: "#435755",
          lightAccent: "#E7F2FF",
          backgroundColor: "#212B42",
        },
      },
      fontFamily: {
        Montserrat: "Montserrat",
      },
    },
  },
  plugins: [],
};
