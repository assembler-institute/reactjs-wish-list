/* eslint-disable prettier/prettier */
import React from "react";
import { v4 as uuidv4 } from 'uuid';
import validation from "./validation";
import styles from "./FormToDo.module.scss";

export default function FormToDo({
  newInput,
  setNewInput,
  toDoItem,
  setTodoItem,
  errors,
  setErrors,
}) {
  const handleChange = e => {
    setNewInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validation(newInput))
    if(newInput) {
      setTodoItem([...toDoItem, {
        id: uuidv4(),
        text: newInput,
        done: false,
        isEditing: false,
      }])
    }
    setNewInput("")
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        data-testid="create-todo-input"
        className="form__addTask"
        name="task"
        type="text"
        placeholder="Add a To-Do"
        value={newInput}
        onChange={handleChange} 
      />
      {errors && <p className={styles.error} data-testid="create-todo-error-message">{errors}</p>}
    </form >
  );
}

export { FormToDo };
