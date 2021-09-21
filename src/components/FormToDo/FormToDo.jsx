/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import SubmitButton from "../SubmitButton/SubmitButton";

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a To-Do"
        value={newInput}
        onChange={handleChange} />
      <SubmitButton />
    </form>
  );
}

export { FormToDo };
