import React, { useState } from "react";

import "./sass/main.scss";
import img from "./img/motivation.jpg";
import { data } from "./utils/data";
import makeNewId from "./utils/hash";

// Components
import CreateToDo from "./components/CreateToDo";
import ToDoList from "./components/ToDoList";

function App() {
  const [toDoItems, setToDoItems] = useState(data);
  const [value, setValue] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);
  // const [updateTodo, setUpdateTodo] = useState(data);
  const [updateValue, setUpdateValue] = useState("");

  function handleChange(event) {
    setValue(event.target.value);
    setIsEmpty(false);
  }
  function handleChangeUpdate(event) {
    setUpdateValue(event.target.value);
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
    setToDoItems((prevState) => [...prevState, newToDo]);
    setValue("");
  }
  function handleUpdate(event) {
    event.preventDefault();
    console.log(value);
    // const updateIndex = updateTodo.find((index) => index.id === id);
    // const item = updateTodo.indexOf(updateIndex);
    // const updatedToDo = {
    //   ...updateIndex,
    //   text: updateValue,
    // };
    // const newState = Array.from(updateTodo);
    // newState[item] = updatedToDo;
    // setUpdateTodo(newState);
  }
  function handleKeyPress(event) {
    if (event.keyCode === 13) {
      handleSubmit();
    }
  }
  function handleKeyPressUpdate(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      console.log("holaaaa!");
      // handleUpdate();
    }
  }
  function handleDelete(id) {
    const deleteIndex = toDoItems.find((index) => index.id === id);
    setToDoItems((prevState) => {
      const newState = prevState.filter((item) => item !== deleteIndex);
      return newState;
    });
  }
  function isCompleted(id) {
    const updateIndex = toDoItems.find((index) => index.id === id);
    const item = toDoItems.indexOf(updateIndex);
    const newState = Array.from(toDoItems);
    newState[item].done = !newState[item].done;
    setToDoItems(newState);
  }
  function toggleEditing(id) {
    const updateIndex = toDoItems.find((index) => index.id === id);
    const item = toDoItems.indexOf(updateIndex);
    const newState = Array.from(toDoItems);
    newState[item].isEditing = !newState[item].isEditing;
    setToDoItems(newState);
  }

  return (
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
          handleKeyPress={handleKeyPress}
          emptyError={isEmpty}
        />
        <ToDoList
          data={toDoItems}
          value={updateValue}
          handleDelete={handleDelete}
          isCompleted={isCompleted}
          handleChangeUpdate={handleChangeUpdate}
          handleKeyPressUpdate={handleKeyPressUpdate}
          emptyError={isEmpty}
          handleUpdate={handleUpdate}
          toggleEditing={toggleEditing}
        />
        {/* <h6>Drag and drop to reorder list</h6> */}
      </section>
    </main>
  );
}

export default App;
