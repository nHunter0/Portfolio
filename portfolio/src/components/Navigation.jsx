import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Moon, Sun } from "lucide-react";

const Navigation = ({ isDarkMode, toggleDarkMode }) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "home" },
    { path: "/projects", label: "projects" },
    { path: "/contact", label: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-primary-900/80 backdrop-blur-sm z-50 border-b border-neutral-200 dark:border-primary-700">
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-lg font-semibold text-accent-purple">
            NH.
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(({ path, label }) => (
              <Link key={path} to={path} className="relative group py-2">
                <span
                  className={`${
                    location.pathname === path
                      ? "text-accent-purple"
                      : "text-neutral-600 dark:text-neutral-300"
                  } hover:text-accent-purple transition-colors`}
                >
                  {label}
                </span>
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-accent-purple transform origin-left transition-transform duration-300 ${
                    location.pathname === path
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            ))}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-neutral-200 dark:hover:bg-primary-700 transition-colors"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-white dark:bg-primary-800 border-b border-neutral-200 dark:border-primary-700">
          {navItems.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`block px-4 py-3 ${
                location.pathname === path
                  ? "text-accent-purple bg-neutral-100 dark:bg-primary-700"
                  : "text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-primary-700"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
