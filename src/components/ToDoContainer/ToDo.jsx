/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
// import { set } from "lodash";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Completed from "../../pages/Completed/Completed";
import Active from "../../pages/Active/Active";
import Home from "../../pages/Home/Home";
import { FormToDo } from "../FormToDo/FormToDo";
import TaskList from "../TaskList/TaskList";
import TaskFooter from "../TaskFooter/TaskFooter";
import TaskNav from "../TaskNav/TaskNav";
import styles from "./ToDo.module.scss";

export default function ToDoContainer() {
  // Add Item State
  const [newInput, setNewInput] = useState("");
  const [errors, setErrors] = useState(""); // State for errors
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

  // Local storage
  const saveToLocalStorage = () => {
    localStorage.setItem("reactjs-todo-list", JSON.stringify(toDoItem));
  };

  const getFromLocalStorage = () => {
    if (localStorage.getItem("reactjs-todo-list") === null) {
      localStorage.setItem("reactjs-todo-list", JSON.stringify([]));
    } else {
      const toDoItemLocal = JSON.parse(localStorage.getItem("reactjs-todo-list"));
      setTodoItem(toDoItemLocal);
    }
  };

  // Run Effect only once when the app start
  // So this function must run before filter and save data
  useEffect(() => {
    getFromLocalStorage();
  }, []);

  // Use Effect to run function when state changes
  useEffect(() => {
    filterTodoHandler();
    saveToLocalStorage();
  }, [toDoItem, status]);

  return (
    <Router>
    <section className={styles.listContainer}>
      <FormToDo
        newInput={newInput}
        setNewInput={setNewInput}
        toDoItem={toDoItem}
        setTodoItem={setTodoItem}
        errors={errors}
        setErrors={setErrors} />
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
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/active" component={Active}/>
        <Route path="/completed" component={Completed}/>
      </Switch>
      <TaskNav
        setTodoItem={setTodoItem}
        toDoItem={toDoItem}
      />
    </section>
    </Router>
  );
}