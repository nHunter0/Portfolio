import React from "react";

// Common button component with standardized glow
const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`relative flex items-center gap-2 px-6 py-2 bg-accent-purple text-white rounded-xl
        hover:bg-accent-violet transition-all duration-300 shadow-lg shadow-accent-purple/20 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Card component with standardized glow
const Card = ({ children, className = "", ...props }) => {
  return (
    <div
      className={`bg-white dark:bg-primary-800 rounded-2xl p-6
        shadow-lg hover:shadow-xl transition-all duration-300
        hover:shadow-accent-purple/20 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

// Icon button with standardized glow
const IconButton = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`p-3 rounded-xl bg-neutral-200 dark:bg-primary-700 
        hover:bg-neutral-300 dark:hover:bg-primary-600 
        transition-all duration-300 hover:shadow-lg hover:shadow-accent-purple/20 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button, Card, IconButton };
