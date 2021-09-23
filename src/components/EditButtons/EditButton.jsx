/* eslint-disable react/prefer-stateless-function */
import React from "react";
import { FaEdit } from "react-icons/fa";
import styles from "./EditButton.module.scss";

export default function EditButton() {
  const editHandler = () => {
    // eslint-disable-next-line
    console.log("check");
  };
  return (
    <button type="button" className={styles.editButton}>
      <FaEdit onClick={editHandler} />
    </button>
  );
}
