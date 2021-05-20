import React from "react";
import illustration from "../../img/illustration.svg";

function EmptyTodo() {
  return (
    <div className="main__empty">
      <p>There is no TODOs</p>
      <img alt="illustration" src={illustration} />
    </div>
  );
}

export default EmptyTodo;
