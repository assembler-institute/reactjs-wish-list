import React from "react";

// import ToDoItem from "../ToDoItem";
import "./ToDoList.scss";
import { data } from "../../utils/data";
import ToDoItem from "../ToDoItem/ToDoItem";

export default function ToDoList() {
  function isCompleted() {}
  return (
    <div className="list-container">
      <div className="todos-container">
        {data.map((item) => (
          <ToDoItem
            key={item.id}
            handleDone={isCompleted}
            text={item.text}
            done={item.done}
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
