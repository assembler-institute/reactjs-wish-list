/* eslint-disable prettier/prettier */
/* eslint-disable react/prefer-stateless-function */
import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import styles from "./RemoveButton.module.scss";

export default function RemoveButton({ item, toDoItem, setToDoItem }) {
  const removeHandler = () => {
    // eslint-disable-next-line
    console.log(item);
    setToDoItem(toDoItem.filter((el) => el.id !== item.id));
  };

  return (
    <button
      onClick={removeHandler}
      type="button"
      className={styles.removeButton}
    >
      <FaTrashAlt onClick={removeHandler} />
    </button>
  );
}
