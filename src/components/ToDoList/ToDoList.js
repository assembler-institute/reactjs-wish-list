import React from "react";

import "./toDoList.scss";

function ToDoList ({allTodos, handleTodoComplete}) {

  return (
  <ul>
    {allTodos.map ((i) => {
      return(
      <li className="border" key={i.id}>
        <input className="todo__checkbox" type="checkbox"
        checked={i.complete}
        onChange={(e) =>{
          e.preventDefault();
          handleTodoComplete(i.id)
        }} />
        {i.name}</li>)
    })}
  </ul>
  );
}

export default ToDoList;