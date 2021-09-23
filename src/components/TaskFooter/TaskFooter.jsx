/* eslint-disable import/no-unresolved */
import React from "react";
import styles from "./TaskFooter.module.scss";

export default function TaskFooter({ setStatus }) {
  const filterHandler = (e) => {
    // eslint-disable-next-line
    console.log(e.target.value);
    setStatus(e.target.value);
  };

  const clearCompleteHandler = () => {
    // eslint-disable-next-line
    console.log("click");
  };

  return (
    <>
      <div>
        <ul className={styles.taskFooter}>
          <li>Items left</li>
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
