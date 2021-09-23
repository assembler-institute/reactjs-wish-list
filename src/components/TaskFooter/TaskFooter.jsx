/* eslint-disable import/no-unresolved */
import React from "react";
import styles from "./TaskFooter.module.scss";

export default function TaskFooter({ setStatus, toDoItem, setTodoItem }) {
  const filterHandler = (e) => {
    // eslint-disable-next-line
    console.log(e.target.value);
    setStatus(e.target.value);
  };

  // Delete completed tasks
  const clearCompleteHandler = () => {
    // eslint-disable-next-line
    console.log(toDoItem);
    setTodoItem(toDoItem.filter((item) => item.done === false));
  };

  // Count active tasks
  const itemLeftCounter = () => {
    const list = toDoItem.filter((item) => item.done === false).length;
    return list;
  };

  return (
    <>
      <div>
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
            <button type="button" onClick={clearCompleteHandler}>
              Clear Complete
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
