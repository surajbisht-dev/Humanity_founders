import React from "react";

export const Card = ({ children, className = "" }) => (
  <div className={`rounded-2xl shadow-md bg-white p-4 ${className}`}>
    {children}
  </div>
);

export const CardHeader = ({ children }) => (
  <div className="mb-2">{children}</div>
);
export const CardTitle = ({ children }) => (
  <h3 className="text-lg font-semibold">{children}</h3>
);
export const CardContent = ({ children, className = "" }) => (
  <div className={className}>{children}</div>
);
