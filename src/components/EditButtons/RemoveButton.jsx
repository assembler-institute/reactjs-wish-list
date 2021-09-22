/* eslint-disable prettier/prettier */
/* eslint-disable react/prefer-stateless-function */
import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import styles from "./RemoveButton.module.scss";


export default class RemoveButton extends React.Component {
  DeleteTaskHandler = ({ toDoItem, setToDoItem }) => {
    setToDoItem(toDoItem.filter((item) => item.id !== toDoItem.id));
    console.log("click");
  };

  render() {
    return <button
      onClick={this.DeleteTaskHandler}
      type="button"
      className={styles.removeButton}

    >
      <FaTrashAlt />
    </button>;
  }
}
