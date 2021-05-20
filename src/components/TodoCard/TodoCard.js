import React from "react";

import "./TodoCard.scss";

export default function TodoCard() {
  return (
    <div className="flex-row card-wide">
      <label>
        <input
          type="checkbox"
          name="completed"
          className="blue-checkbox clickable"
        />
      </label>
      <span className="font-bold font-big full-width">TodoCard</span>
      <div>
        <i className="bi bi-x-lg font-light clickable" />
      </div>
    </div>
  );
}
