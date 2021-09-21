/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import styles from "./FormToDo.module.scss"

function FormToDo() {
  const [newInput, setNewInput] = useState("");


  const handleChange = e => {
    setNewInput(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();
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
