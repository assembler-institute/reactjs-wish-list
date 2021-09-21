/* eslint-disable import/no-unresolved */
import React from "react";
import Task from "../Task/Task";
import styles from "./TaskList.module.scss";

export default function TaskList() {
  return (
    <>
      <div className={styles.taskList}>
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </div>
    </>
  );
}
