import React from "react";

import "./sass/main.scss";
import img from "./img/motivation.jpg";

// Components
import CreateToDo from "./components/CreateToDo";
import ToDoList from "./components/ToDoList";

function App() {
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
        <CreateToDo />
        <ToDoList />
        {/* <h6>Drag and drop to reorder list</h6> */}
      </section>
    </main>
  );
}

export default App;
