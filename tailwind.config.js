/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whiteTheme: {
          primaryColor: "#5349C3",
          backgroundColor: "#FFFFFF",
          secondColor: "#ffffff",
          accentColor: "#796B92",
          greenAccent: "#EFF5F4",
          accentDark: "#435755",
          lightAccent: "#F6F8FA",
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
