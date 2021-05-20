import React from "react";
import classnames from "classnames/bind";

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
    <li className="list-group-item text-capitalize d-flex justify-content-between p-2 todo">
      <span>
        <input type="checkbox" onChange={handleCompleteTodo} />
        <h6 className={cns({ completed: completed })}>{title}</h6>
      </span>

      <div className="todoRight">
        <button
          type="button"
          className="btn btn-info mx-2"
          onClick={handleEdit}
        >
          edit
        </button>

        <button type="button" className="removeBtn" onClick={handleRemove} />
      </div>
    </li>
  );
}
