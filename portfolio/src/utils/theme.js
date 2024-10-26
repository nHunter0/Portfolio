// utils/theme.js !deprecated!
export const setTheme = (isDark) => {
  if (isDark) {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  }
};

export const getInitialTheme = () => {
  // Check if theme is set in localStorage
  if (localStorage.theme) {
    return localStorage.theme === "dark";
  }
  // Default to dark mode
  return true;
};
