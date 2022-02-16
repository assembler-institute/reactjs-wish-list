import React from "react";

import "./CreateToDo.scss";
// import { data } from "../../utils/data";

export default function CreateToDo({
  value,
  handleChange,
  handleSubmit,
  handleKeyPress,
}) {
  return (
    <form action="" className="create-todo-input">
      <span className="material-icons-outlined md-30">circle</span>
      <input
        type="text"
        placeholder="Create new item"
        value={value}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <button
        type="submit"
        style={{ display: "none" }}
        onClick={handleSubmit}
        name=""
        value=""
      />
    </form>
  );
}
