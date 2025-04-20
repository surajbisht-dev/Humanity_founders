// src/components/ui/button.jsx
import React from "react";

export const Button = ({ children, className = "", ...props }) => (
  <button
    className={`px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 ${className}`}
    {...props}
  >
    {children}
  </button>
);
