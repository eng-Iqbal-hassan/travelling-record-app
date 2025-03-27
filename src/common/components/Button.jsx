import React from "react";

export function Button({ className, title }) {
  return <button className={`text-white text-base font-medium py-2 px-4 rounded-md ${className}`}>{title}</button>;
}
