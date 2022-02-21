import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./sass/main.scss";
import img from "./img/motivation.jpg";
import { data } from "./utils/data";
import makeNewId from "./utils/hash";

// Components
import ToDoList from "./components/ToDoList";
import CreateToDo from "./components/CreateToDo";

function App() {
  const [toDoItems, setToDoItems] = useState(data);
  const [value, setValue] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);

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
    setValue(event.target.value);
    setIsEmpty(false);
  }
  function handleSubmit(event) {
    event.preventDefault();
    // Empty error
    if (value === "") {
      setIsEmpty(true);
      return;
    }
    const newToDo = {
      id: makeNewId(),
      text: value,
      done: false,
      isEditing: false,
    };
    setToDoItems((prevState) => [newToDo, ...prevState]);
    setValue("");
  }
  // Delete
  function handleDelete(id) {
    const deleteIndex = toDoItems.find((index) => index.id === id);
    setToDoItems((prevState) => {
      const newState = prevState.filter((item) => item !== deleteIndex);
      return newState;
    });
  }
  // Modify a value of a ToDo Item
  function changeValue(id, param) {
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
    };
    setToDoItems((prevState) => [...prevState, newToDo]);
    // changeValue(id, "done");
  }
  // Is Editing
  function toggleEditing(id) {
    changeValue(id, "isEditing");
  }

  // Clear Completed Items
  function clearCompleted() {
    setToDoItems(activeTodos);
  }

  return (
    <BrowserRouter>
      <main className="">
        <header>
          <img src={img} alt="motivated person in the mountains" />
        </header>
        <section className="todo-list">
          <div className="main-header">
            <h1>TODO</h1>
            <button className="" type="button">
              <span className="material-icons-outlined md-48">light_mode</span>
            </button>
          </div>
          <CreateToDo
            value={value}
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
                emptyError={isEmpty}
                toggleEditing={toggleEditing}
                handleClear={clearCompleted}
                reorderList={setToDoItems}
              />
            </Route>
          ))}
          {/* <h6>Drag and drop to reorder list</h6> */}
        </section>
      </main>
    </BrowserRouter>
  );
}

export default App;
