import React from "react";

function Button({
  children, // btn text
  type = "button", // btn type
  bgColor = "bg-blue-600",
  textColor = "text-white",
  className = "",
  ...props
}) {
  return (
    <button
      className={`cursor-pointer px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className} hover:bg-blue-700 duration-200`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
