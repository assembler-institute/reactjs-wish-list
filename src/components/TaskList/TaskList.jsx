/* eslint-disable import/no-unresolved */
import React from "react";
import Task from "../Task/Task";
import styles from "./TaskList.module.scss";

export default function TaskList({
  toDoItem,
  setTodoItem,
  filterTodoItem,
  isEditing,
  setEditing,
  newName,
  setNewName,
}) {
  return (
    <>
      <ul className={styles.taskList} data-testid="todos-list">
        {filterTodoItem.map((item) => (
          /* eslint-disable*/
          <Task
            text={item.text}
            key={item.id}
            toDoItem={toDoItem}
            setToDoItem={setTodoItem}
            item={item}
            isEditing={isEditing}
            setEditing={setEditing}
            newName={newName}
            setNewName={setNewName}
          />
        )
        )}
      </ul>
    </> 
  );
}


