/* eslint-disable import/no-unresolved */
import React from "react";
import styles from "./TaskFooter.module.scss";

export default function TaskFooter({ setStatus, toDoItem, setTodoItem }) {
  const filterHandler = (e) => {
    setStatus(e.target.value);
  };

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
      <footer data-testid="app-footer">
        <ul className={styles.taskFooter}>
          <li>{itemLeftCounter()} Items left</li>
          <li>
            <button type="button" value="all" onClick={filterHandler}>
              All
            </button>
          </li>
          <li>
            <button type="button" value="active" onClick={filterHandler}>
              Active
            </button>
          </li>
          <li>
            <button type="button" value="complete" onClick={filterHandler}>
              Complete
            </button>
          </li>
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
      </footer>
    </>
  );
}
