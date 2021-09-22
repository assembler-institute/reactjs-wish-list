/* eslint-disable react/prefer-stateless-function */
import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import styles from "./RemoveButton.module.scss";

export default function RemoveButton({ toDoItem, setToDoItem }) {
  const removeHandler = () => {
    setToDoItem(toDoItem.filter((el) => el.id !== toDoItem.id));
  };
  return (
    <button
      onClick={removeHandler}
      type="button"
      className={styles.removeButton}
    >
      <FaTrashAlt />
    </button>
  );
}
