/* eslint-disable import/no-unresolved */
import React from "react";
import Task from "../Task/Task";
import styles from "./TaskList.module.scss";

export default function TaskList({ toDoItem, setTodoItem }) {
  return (
    <>
      <ul className={styles.taskList}>
        {toDoItem.map((item) => (
          /* eslint-disable*/
          <Task
            text={item.text}
            key={item.id}
            toDoItem={toDoItem}
            setToDoItem={setTodoItem}
            item={item}
          />
        )
        )}
      </ul>
    </>
  );
}
