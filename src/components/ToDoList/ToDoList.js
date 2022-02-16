import React from "react";

// import ToDoItem from "../ToDoItem";
import "./ToDoList.scss";
import { data } from "../../utils/data";

export default function ToDoList() {
  return (
    <div className="list-container">
      {data.map((item) => (
        <div key={item.id}>{item.id}</div>
      ))}
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
