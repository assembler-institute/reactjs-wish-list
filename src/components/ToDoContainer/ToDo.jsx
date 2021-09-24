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

  // Edit Item State
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState("");

  // Filter Item State
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

  // Use Effect to run function when state changes
  useEffect(() => {
    filterTodoHandler();
  }, [toDoItem, status]);

  // Local storage
  // const saveToLocalStorage = () => {
  //   localStorage.setItem("reactjs-todo-list", JSON.stringify(toDoItem));
  // };

  // const getFromLocalStorage = () => {
  //   if (localStorage.getItem("reactjs-todo-list") === null) {
  //     localStorage.setItem("reactjs-todo-list", JSON.stringify(toDoItem));
  //   } else {
  //     const toDoItemLocal = JSON.parse(localStorage.getItem("reactjs-todo-list"));
  //     setTodoItem(toDoItemLocal);
  //   }
  // };

  // // Run Effect
  // useEffect(() => {
  //    getFromLocalStorage();
  // }, []);

  return (
    <section className={styles.listContainer}>
      <FormToDo
        newInput={newInput}
        setNewInput={setNewInput}
        toDoItem={toDoItem}
        setTodoItem={setTodoItem} />
      <TaskList
        toDoItem={toDoItem}
        setTodoItem={setTodoItem}
        filterTodoItem={filterTodoItem}
        isEditing={isEditing}
        setEditing={setEditing}
        newName={newName}
        setNewName={setNewName}/>
      <TaskFooter
        status={status}
        setStatus={setStatus}
        setTodoItem={setTodoItem}
        toDoItem={toDoItem}
      />
    </section>
  );
}