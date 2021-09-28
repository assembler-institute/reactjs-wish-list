import React from "react";
import CompletedCheckBox from "../CompletedCheckBox/CompletedCheckBox";
import "../DeleteButton/DeleteButton";
import "./toDoList.scss";
import DeleteButton from "../../components/DeleteButton/DeleteButton";

function ToDoList ({displayList, handleTodoComplete, handleRemove, handleChangeEdit, handleSubmitEdit}) {
  return (
  <ul>
    {displayList.map ((todo) => {
      return(
      <li className="border" key={todo.id}>
        <CompletedCheckBox
        isChecked={todo.complete}
        onChange={() =>{
          handleTodoComplete(todo.id)
        }}/>
        {todo.isEditing ? <form onSubmit={(e)=>handleSubmitEdit(e, todo.id)}>
        <input
        value={todo.name}
        autoFocus
        onChange={(e) =>{handleChangeEdit(e, todo.id)}
        }
        />
        </form>: <span onClick={(e)=>handleSubmitEdit(e, todo.id)}>{todo.name}</span> }
        <DeleteButton onClick={() =>{ handleRemove(todo.id)}}/>
        </li>
        )
    })}
  </ul>
  );
}

export default ToDoList;