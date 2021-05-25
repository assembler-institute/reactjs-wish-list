import React from "react";
import classnames from "classnames";

import AddIcon from "../Icons/AddIcon";
import UpdateIcon from "../Icons/UpdateIcon";

import "./AddTodo.scss";

export default function AddTodo({
  todo,
  handleChange,
  handleSubmit,
  editTodo,
}) {
  return (
    <div className="addTodo">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          todo={todo}
          placeholder="Add To Do"
          onChange={handleChange}
          value={todo}
          required
        />
        <button
          className={classnames("btn addBtn", { updateBtn: editTodo })}
          type="submit"
        >
          {editTodo ? <UpdateIcon /> : <AddIcon />}
        </button>
      </form>
    </div>
  );
}
