import React from "react";

function Button({
  submitButton,
  disabled = false,
  // block = false,
  // small = false,
  children,
  ...props
}) {
  return (
    <button
      type={submitButton ? "submit" : "button"}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
