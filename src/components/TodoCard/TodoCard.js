import React from "react";

import "./TodoCard.scss";

export default function TodoCard() {
  return (
    <div className="flex-row card-wide">
      <label className="blue-checkbox clickable">
        <input type="checkbox" name="completed" />
        <div className="status-switch text-center">
          <i className=" bi bi-check inherit-size" />
        </div>
      </label>
      <span className="font-bold font-big full-width">TodoCard</span>
      <div>
        <i className="bi bi-x-lg font-light clickable" />
      </div>
    </div>
  );
}
