/* eslint-disable prettier/prettier */
import React from "react";
import { v4 as uuidv4 } from 'uuid';
import styles from "./FormToDo.module.scss";

function FormToDo({
  newInput,
  setNewInput,
  toDoItem,
  setTodoItem
}) {

  const handleChange = e => {
    setNewInput(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();
    setTodoItem([...toDoItem, {
      id: uuidv4(),
      text: newInput,
      done: false,
      isEditing: false,
    }])
    setNewInput("")

  }


  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        data-testid="create-todo-input"
        className="form__addTask"
        type="text"
        placeholder="Add a To-Do"
        value={newInput}
        onChange={handleChange} />
    </form >
  );
}

export { FormToDo };
