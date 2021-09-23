/* eslint-disable prettier/prettier */
import React from "react";
import styles from "./FormToDo.module.scss"

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
      id: Math.random() * 1000,
      text: newInput,
      done: false,
      isEditing: false,
    }])
    setNewInput("")

  }


  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        className="form__addTask"
        type="text"
        placeholder="Add a To-Do"
        value={newInput}
        onChange={handleChange} />
    </form >
  );
}

export { FormToDo };
