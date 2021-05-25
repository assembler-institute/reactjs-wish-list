import React from "react";

import illustration from "../../img/illustration.svg";
import "./EmptyTodo.scss";

function EmptyTodo() {
  return (
    <div className="main__empty">
      <p>There is no todo...</p>
      <img alt="illustration" src={illustration} />
    </div>
  );
}

export default EmptyTodo;
