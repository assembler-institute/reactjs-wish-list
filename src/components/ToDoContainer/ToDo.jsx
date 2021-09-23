/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
// import { set } from "lodash";
import { FormToDo } from "../FormToDo/FormToDo";
import TaskList from "../TaskList/TaskList";
import TaskFooter from "../TaskFooter/TaskFooter";
import styles from "./ToDo.module.scss";

export default function ToDoContainer() {
  const [newInput, setNewInput] = useState("");
  const [toDoItem, setTodoItem] = useState([]);

  // Edit Item
  // toDoEdit will be the id of the item needed to be editted
  // const [toDoEdit, setTodoEdit] = useState(null);
  // const [textEdit, setTextEdit] = useState("");

  // Filter Item
  const [status, setStatus] = useState("all");
  const [filterTodoItem, setFilterTodoItem] = useState([]);

  const filterTodoHandler = () => {
    switch (status) {
      case "complete":
        setFilterTodoItem(toDoItem.filter((item) => item.done === true))
        break;
      case "active":
        setFilterTodoItem(toDoItem.filter((item) => item.done === false))
        break;
      default:
        setFilterTodoItem(toDoItem);
        break;
    }
  }

  // Use Effect 
  useEffect(() => {
    filterTodoHandler();
  }, [toDoItem, status]);

  // Local storage
  // const saveToLocalStorage = () => {
  //   localStorage.setItem("toDoItem", JSON.stringify(toDoItem));
  // };

  // const getFromLocalStorage = () => {
  //   if (localStorage.getItem("toDoItem") === null) {
  //     localStorage.setItem("toDoItem", JSON.stringify(toDoItem));
  //   } else {
  //     const toDoItemLocal = JSON.parse(localStorage.getItem("toDoItem"));
  //     setTodoItem(toDoItemLocal);
  //   }
  // };

  // // Run Effect
  // useEffect(() => {
  //   getFromLocalStorage();
  // }, []);

  return (
    <div className={styles.listContainer}>
      <FormToDo newInput={newInput} setNewInput={setNewInput} toDoItem={toDoItem} setTodoItem={setTodoItem} />
      <TaskList toDoItem={toDoItem} setTodoItem={setTodoItem} filterTodoItem={filterTodoItem} />
      <TaskFooter
        status={status}
        setStatus={setStatus}
      />
    </div>
  );
}
