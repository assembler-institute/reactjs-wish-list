/* eslint-disable import/no-unresolved */
import React from "react";
import Task from "../Task/Task";
import styles from "./TaskList.module.scss";

export default function TaskList({ toDoItem, setTodoItem }) {
  return (
    <>
      <div className={styles.taskList}>
        {toDoItem.map((e) => (
          /* eslint-disable*/
          <Task
            text={e.text}
            key={e.id}
            toDoItem={toDoItem}
            setTodoItem={setTodoItem}
          />
        )
        )}
      </div>
    </>
  );
}
