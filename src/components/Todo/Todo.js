import React from "react";

import "./Todo.scss";

export default function Todo({ title, handleCompleteTodo, handleEdit }) {
  return (
    <li className="list-group-item text-capitalize d-flex justify-content-between p-2 todo">
      <span>
        <input type="checkbox" onChange={handleCompleteTodo} />
        <h6>{title}</h6>
      </span>

      <button type="button" className="btn btn-info mx-2" onClick={handleEdit}>
        edit
      </button>
    </li>
  );
}
