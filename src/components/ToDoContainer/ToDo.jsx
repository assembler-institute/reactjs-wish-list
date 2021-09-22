import React from "react";
import { FormToDo } from "../FormToDo/FormToDo";
import TaskList from "../TaskList/TaskList";
import styles from "./ToDo.module.scss";

export default function ToDoContainer() {
  return (
    <div className={styles.listContainer}>
      <FormToDo />
      <TaskList />
    </div>
  );
}
