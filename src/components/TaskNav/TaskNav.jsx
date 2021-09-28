/* eslint-disable import/no-unresolved */
import React from "react";
import { Link } from "react-router-dom";
import styles from "./TaskNav.module.scss";

export default function TaskNav({ toDoItem, setTodoItem }) {
  // Delete completed tasks
  const clearCompleteHandler = () => {
    setTodoItem(toDoItem.filter((item) => item.done === false));
  };

  // Count active tasks
  const itemLeftCounter = () => {
    const list = toDoItem.filter((item) => item.done === false).length;
    return list;
  };

  return (
    <>
      <nav data-testid="app-footer">
        <ul className={styles.taskNav}>
          <li>{itemLeftCounter()} Items left</li>
          <Link to="/">
            <li>All</li>
          </Link>
          <Link to="/Active">
            <li>Active</li>
          </Link>
          <Link to="/Completed">
            <li>Completed</li>
          </Link>
          <li>
            <button
              type="button"
              onClick={clearCompleteHandler}
              data-testid="clear-completed-todos"
            >
              Clear Complete
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
