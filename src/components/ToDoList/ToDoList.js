import React from "react";
import CompletedCheckBox from "../CompletedCheckBox/CompletedCheckBox";
import "../DeleteButton/DeleteButton";
import "./toDoList.scss";
import DeleteButton from "../../components/DeleteButton/DeleteButton";

function ToDoList ({allTodos, handleTodoComplete, handleRemove}) {

  return (
  <ul>
    {allTodos.map ((todo) => {
      return(
      <li className="border" key={todo.id}>
        <CompletedCheckBox
        isChecked={todo.complete}
        onChange={(e) =>{
          e.preventDefault();
          handleTodoComplete(todo.id)
        }} />
        {todo.name}
        <DeleteButton onClick={() =>{ handleRemove(todo.id)}}/>
        </li>
        )
    })}
  </ul>
  );
}

export default ToDoList;