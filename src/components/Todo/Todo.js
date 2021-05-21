import React from "react";
import classnames from "classnames/bind";

import EditIcon from "../Icons/EditIcon";

import todoStyles from "./Todo.scss";

const cns = classnames.bind(todoStyles);

export default function Todo({
  title,
  handleCompleteTodo,
  handleEdit,
  handleRemove,
  completed,
}) {
  return (
    <li className="list-group-item text-capitalize d-flex justify-content-between p-2 todo border-bottom border-top-0 border-left-0 border-right-0">
      <span>
        <input
          type="checkbox"
          onChange={handleCompleteTodo}
          checked={completed}
        />
        <h6 className={cns({ completed: completed })}>{title}</h6>
      </span>

      <div className="todoRight">
        <button type="button" className="btn mx-2 editBtn" onClick={handleEdit}>
          <EditIcon />
        </button>

        <button type="button" className="removeBtn" onClick={handleRemove} />
      </div>
    </li>
  );
}
