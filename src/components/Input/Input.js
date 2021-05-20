import React from "react";

export default function Input({
  type = "text",
  id = "",
  value = "",
  placeholder = "",
  handleChange = () => {},
  handleBlur = () => {},
  errorMessage,
  hasErrorMessage,
  ...props
}) {
  return (
    <div className="input">
      <input
        className={
          hasErrorMessage && errorMessage
            ? "form-control is-invalid"
            : "form-control"
        }
        id={id}
        name={id}
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
