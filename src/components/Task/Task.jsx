import React from "react";
import EditButton from "../EditButtons/EditButton";
import RemoveButton from "../EditButtons/RemoveButton";
import styles from "./Task.module.scss";

export default function Task({ text, item, toDoItem, setToDoItem }) {
  return (
    <li className={styles.task}>
      <label htmlFor="checkbox">
        <input type="checkbox" />
        {text}
      </label>
      <div className={styles.taskControllers}>
        <EditButton />
        <RemoveButton
          toDoItem={toDoItem}
          setToDoItem={setToDoItem}
          item={item}
        />
      </div>
    </li>
  );
}
