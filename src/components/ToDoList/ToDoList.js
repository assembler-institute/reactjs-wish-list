import React from "react";

// import ToDoItem from "../ToDoItem";
import "./ToDoList.scss";
import ToDoItem from "../ToDoItem/ToDoItem";

export default function ToDoList({ data, handleDelete, isCompleted }) {
  return (
    <div className="list-container">
      <div className="todos-container">
        {data.map((item) => (
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
      {/* <ToDoItem /> */}

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
