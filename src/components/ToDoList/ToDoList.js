import React from "react";

// import ToDoItem from "../ToDoItem";
import "./ToDoList.scss";
import ToDoItem from "../ToDoItem/ToDoItem";
import noTodosImg from "../../img/no_todos.svg";

export default function ToDoList({ data, handleDelete, isCompleted }) {
  return (
    <div className="list-container">
      {data.length > 0 && (
        <div className="todos-container">
          {data.map((item) => (
            // NO TODOS
            <ToDoItem
              id={item.id}
              key={item.id}
              handleDone={() => isCompleted(item.id)}
              text={item.text}
              done={item.done}
              handleDelete={() => handleDelete(item.id)}
            />
          ))}
        </div>
      )}
      {!data.length && (
        <div className="emptyTodos">
          <img src={noTodosImg} alt="" className="noTodos" />
          <h3>Please write your first ToDo</h3>
        </div>
      )}

      <footer className="mt-auto">
        <span className="items-left">5 items left</span>
        <div className="items-status">
          <button type="button">All</button>
          <button type="button">Active</button>
          <button type="button">Completed</button>
        </div>
        <button type="button" className="clear-completed">
          Clear Completed
        </button>
      </footer>
    </div>
  );
}
