/* eslint-disable import/no-unresolved */
import React from "react";
import Task from "../Task/Task";
import styles from "./TaskList.module.scss";

export default function TaskList({
  toDoItem,
  setTodoItem,
  toDoEdit,
  setTodoEdit,
  textEdit,
  setTextEdit,
  filterTodoItem,
}) {
  return (
    <>
      <ul className={styles.taskList}>
        {filterTodoItem.map((item) => (
          /* eslint-disable*/
          <Task
            text={item.text}
            key={item.id}
            toDoItem={toDoItem}
            setToDoItem={setTodoItem}
            item={item}
            toDoEdit={toDoEdit}
            setTodoEdit={setTodoEdit}
            textEdit={textEdit}
            setTextEdit={setTextEdit}
          />
        )
        )}
      </ul>
    </> 
  );
}


