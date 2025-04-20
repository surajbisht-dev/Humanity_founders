import React from "react";

export const Button = ({
  children,
  className = "",
  variant = "default",
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium";
  const variants = {
    default: "bg-blue-500 text-white hover:bg-blue-600",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};
