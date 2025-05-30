import React from "react";

export function Button({ className, title, onClick, type }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`text-white text-base font-medium py-2 px-4 rounded-md cursor-pointer ${className}`}
    >
      {title}
    </button>
  );
}
