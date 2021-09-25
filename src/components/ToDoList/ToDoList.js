import React from "react";
import CompletedCheckBox from "../CompletedCheckBox/CompletedCheckBox";

import "./toDoList.scss";

function ToDoList ({allTodos, handleTodoComplete}) {

  return (
  <ul>
    {allTodos.map ((i) => {
      return(
      <li className="border" key={i.id}>
        <CompletedCheckBox
        isChecked={i.complete}
        onChange={(e) =>{
          e.preventDefault();
          handleTodoComplete(i.id)
        }} />
        {i.name}
        <button type="button" className="cancel"  />
        </li>
        )
    })}
  </ul>
  );
}

export default ToDoList;