/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { FormToDo } from "../FormToDo/FormToDo";
import TaskList from "../TaskList/TaskList";
import styles from "./ToDo.module.scss";

export default function ToDoContainer() {
  const [newInput, setNewInput] = useState("");
  const [toDoItem, setTodoItem] = useState([]);

  return (
    <div className={styles.listContainer}>
      <FormToDo newInput={newInput} setNewInput={setNewInput} toDoItem={toDoItem} setTodoItem={setTodoItem} />
      <TaskList toDoItem={toDoItem} setTodoItem={setTodoItem} />
    </div>
  );
}
