/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#0a0f1a",
        elevated: "#0f1724",
        subtle: "#050814",
        "accent-blue": "#0055ffff",
        "accent-cyan": "#0055ffff",
        "accent-purple": "#0015ffff",
        "border-soft": "#1f2933",
      },
      boxShadow: {
        glow: "0 0 18px rgba(59,130,246,0.4)",
      },
    },
  },
  plugins: [],
};
