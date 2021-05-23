/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import "./Checkbox.scss";

export default function Checkbox({ checked, handleChangeCheck, id }) {
  return (
    <div className="border" onClick={() => handleChangeCheck(id)}>
      <div className={`indicator ${checked ? "checked" : ""}`} />
    </div>
  );
}
