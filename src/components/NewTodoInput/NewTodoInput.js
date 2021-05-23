import React from "react";
import "./NewTodoInput.scss";

export default function Input({
  type = "text",
  id,
  value = "",
  placeholder = "",
  handleChange,
  handleBlur,
  errorMessage,
  hasErrorMessage,
  ...props
}) {
  return (
    <div className="input">
      <input
        id="input"
        name="content"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        {...props}
      />
      {hasErrorMessage && errorMessage && (
        <p className="invalid-feedback">{errorMessage}</p>
      )}
    </div>
  );
}
