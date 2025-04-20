import React from "react";
import { cn } from "../../lib/utils";

export const Button = ({ className, variant = "default", ...props }) => {
  const base = "rounded-md px-4 py-2 text-sm font-medium";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
  };

  return (
    <button className={cn(base, variants[variant], className)} {...props} />
  );
};
