import React from "react";

export default function ChatReplyIcon({
  className = "",
  title = "Send follow-up message",
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`w-4 h-4 cursor-pointer ${className}`}
      title={title}
      {...props}
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v2" />
      <polyline points="17 8 22 3 17 3" />
    </svg>
  );
}
