import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { motion } from "framer-motion/dist/framer-motion";

import "./sass/main.scss";
import imgLight from "./img/motivation.jpg";
import imgDark from "./img/motivation2.jpg";
import { data } from "./utils/data";
import makeNewId from "./utils/hash";

// Components
import ToDoList from "./components/ToDoList";
import CreateToDo from "./components/CreateToDo";

const classNames = require("classnames");

function App() {
  const [toDoItems, setToDoItems] = useState(data);
  const [formData, setFormData] = useState({
    id: "",
    text: "",
    done: false,
    isEditing: false,
    label: "",
  });
  const [isEmpty, setIsEmpty] = useState(false);
  const [todoIsEmpty, setTodoIsEmpty] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) setToDoItems(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(toDoItems));
  }, [toDoItems]);

  const completedTodos = toDoItems.filter((item) => item.done === true);
  const activeTodos = toDoItems.filter((item) => item.done !== true);

  const routes = [
    { path: "/", data: toDoItems },
    { path: "/completed", data: completedTodos },
    { path: "/active", data: activeTodos },
  ];

  // Create New Item
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
    setIsEmpty(false);
  }
  function handleSubmit(event) {
    event.preventDefault();
    // Empty error
    if (formData.text === "") {
      setIsEmpty(true);
      return;
    }
    const newToDo = {
      id: makeNewId(),
      text: formData.text,
      done: false,
      isEditing: false,
      label: formData.label,
    };
    setToDoItems((prevState) => [newToDo, ...prevState]);
    setFormData({
      id: "",
      text: "",
      done: false,
      isEditing: false,
      label: "",
    });
  }
  // Delete
  function handleDelete(id) {
    const deleteIndex = toDoItems.find((index) => index.id === id);
    setToDoItems((prevState) => {
      const newState = prevState.filter((item) => item !== deleteIndex);
      return newState;
    });
  }
  // Modify a formData of a ToDo Item
  function changeformData(id, param) {
    const element = toDoItems.find((index) => index.id === id);
    const index = toDoItems.indexOf(element);
    const newState = Array.from(toDoItems);
    newState[index][param] = !newState[index][param];
    setToDoItems(newState);
  }
  // Is Completed
  function isCompleted(id) {
    const element = toDoItems.find((index) => index.id === id);
    handleDelete(id);
    const newToDo = {
      id: element.id,
      text: element.text,
      done: !element.done,
      isEditing: false,
      label: element.label,
    };
    setToDoItems((prevState) => [...prevState, newToDo]);
    // changeformData(id, "done");
  }
  // Is Editing
  function toggleEditing(id) {
    changeformData(id, "isEditing");
  }

  // Clear Completed Items
  function clearCompleted() {
    setToDoItems(activeTodos);
  }
  function changeTheme() {
    setDarkTheme(!darkTheme);
  }
  return (
    <BrowserRouter>
      <main className={darkTheme ? classNames("dark-mode") : ""}>
        <header>
          <img
            src={darkTheme ? imgDark : imgLight}
            alt="motivated person in the mountains"
          />
        </header>
        <section
          id="container-sm"
          className="container-sm d-flex flex-column fixed-top align-items-center h-100"
        >
          <div className="main-header w-100 mt-5 d-flex justify-content-between">
            <h1>TODO</h1>
            <motion.button
              initial={{ opacity: 0, y: -25 }}
              animate={{ opacity: 1, y: 0 }}
              className=""
              type="button"
              onClick={changeTheme}
            >
              <span className="material-icons-outlined md-48">
                {darkTheme ? "dark_mode" : "light_mode"}
              </span>
            </motion.button>
          </div>
          <CreateToDo
            value={formData.text}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            emptyError={isEmpty}
          />
          {routes.map((route) => (
            <Route key={route} path={route.path} exact>
              <ToDoList
                data={route.data}
                handleDelete={handleDelete}
                isCompleted={isCompleted}
                handleError={setTodoIsEmpty}
                emptyError={todoIsEmpty}
                toggleEditing={toggleEditing}
                handleClear={clearCompleted}
                reorderList={setToDoItems}
                theme={darkTheme}
              />
            </Route>
          ))}
          <h6 className="mt-5">Drag and drop to reorder list</h6>
        </section>
      </main>
    </BrowserRouter>
  );
}

export default App;
