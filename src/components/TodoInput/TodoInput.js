import React from "react";
import "../Input/input.scss";

export default function Input({
  type = "text",
  id,
  value = "",
  placeholder = "",
  handleChange,
  handleBlur,
  handleEnterKey,
  errorMessage,
  hasErrorMessage,
  displayHashtag,
  hashtagDisplayed,
  ...props
}) {
  function isDisplayed() {
    if (id) {
      displayHashtag(id);
    }
  }
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
        onKeyPress={handleEnterKey}
        onClick={isDisplayed}
        {...props}
      />
      {hasErrorMessage && errorMessage && (
        <p className="invalid-feedback">{errorMessage}</p>
      )}
    </div>
  );
}
