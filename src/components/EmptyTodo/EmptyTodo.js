import React from "react";
import illustration from "../../img/illustration.svg";

function EmptyTodo() {
  return (
    <div className="main__empty">
      <p>Create a new TODO</p>
      <img alt="illustration" src={illustration} />
    </div>
  );
}

export default EmptyTodo;
