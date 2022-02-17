import React from "react";

// import ToDoItem from "../ToDoItem";
import "./ToDoList.scss";
import ToDoItem from "../ToDoItem/ToDoItem";
import noTodosImg from "../../img/no_todos.svg";

export default function ToDoList({
  data,
  handleDelete,
  isCompleted,
  handleChangeUpdate,
  handleKeyPressUpdate,
  isEmpty,
  toggleEditing,
  handleUpdate,
}) {
  return (
    <div className="list-container">
      {data.length > 0 && (
        <ul className="todos-container" data-testid="todos-list">
          {data.map((item) => (
            <li key={item.id} data-testid="todo-item">
              <ToDoItem
                id={item.id}
                handleDone={() => isCompleted(item.id)}
                text={item.text}
                done={item.done}
                isEditing={item.isEditing}
                handleDelete={() => handleDelete(item.id)}
                handleChangeUpdate={handleChangeUpdate}
                handleKeyPressUpdate={handleKeyPressUpdate}
                emptyError={isEmpty}
                handleUpdate={handleUpdate}
                toggleEditing={() => toggleEditing(item.id)}
              />
            </li>
          ))}
        </ul>
      )}
      {!data.length && (
        <div className="emptyTodosContainer" data-testid="no-todos">
          <img src={noTodosImg} alt="" className="noTodos" />
          <h3>Please write your first ToDo</h3>
        </div>
      )}

      <footer className="mt-auto" data-testid="app-footer">
        <span className="items-left">
          {data.length === 1
            ? `${data.length} todo left`
            : `${data.length} todos left`}
        </span>
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
