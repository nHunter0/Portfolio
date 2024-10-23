// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          900: "#1A1625", // Deep purple background
          800: "#231F2E", // Lighter background
          700: "#2D2739", // Card background
          600: "#382F45", // Hover states
        },
        accent: {
          purple: "#8B5CF6", // Main purple
          violet: "#7C3AED", // Darker purple
          indigo: "#6366F1", // Complementary color
          pink: "#EC4899", // Accent color
        },
        neutral: {
          950: "#0A0711", // Darkest
          900: "#1A1625",
          800: "#2D2739",
          700: "#4A4458",
          400: "#A8A3B3",
          300: "#D4D0DC",
          200: "#E6E3EC",
          100: "#F4F2F7",
        },
      },
    },
  },
  plugins: [],
};
