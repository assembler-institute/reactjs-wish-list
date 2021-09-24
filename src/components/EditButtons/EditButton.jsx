/* eslint-disable react/prefer-stateless-function */
import React from "react";
import { FaEdit } from "react-icons/fa";
import styles from "./EditButton.module.scss";

export default function EditButton({ setEditing, item }) {
  const openEditView = () => {
    setEditing(true);
  };
  return (
    <button type="button" className={styles.editButton}>
      <FaEdit onClick={() => openEditView(item)} />
    </button>
  );
}
