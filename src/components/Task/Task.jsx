import React from "react";
import EditButton from "../EditButtons/EditButton";
import RemoveButton from "../EditButtons/RemoveButton";
import styles from "./Task.module.scss";

export default function Task() {
  return (
    <div className={styles.task}>
      <label htmlFor="checkbox">
        <input type="checkbox" />
        Task 1
      </label>
      <div className={styles.taskControllers}>
        <EditButton />
        <RemoveButton />
      </div>
    </div>
  );
}
