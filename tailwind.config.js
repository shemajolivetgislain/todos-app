/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
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
          primaryColor: "#1A1732",
          borderColor: "#283249",
          textColor: "#ffffff",
          secondColor: "#4E4A7B",
          greenAccent: "#EFF5F4",
          accentDark: "#435755",
          lightAccent: "#E7F2FF",
          backgroundColor: "#272543",
        },
      },
      fontFamily: {
        Montserrat: "Montserrat",
      },
    },
  },
  plugins: [],
};
