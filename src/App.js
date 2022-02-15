import React from "react";

import "./sass/main.scss";
import img from "./img/motivation.jpg";

function App() {
  return (
    <main className="">
      <header>
        <img src={img} alt="motivated person in the mountains" />
      </header>
      <section className="todo-list">
        <div className="d-flex">
          <h1>TODO</h1>
          <button type="button">Switch</button>
        </div>
        {/* <Input />
        <TodoList /> */}
        <h6>Drag and drop to reorder list</h6>
      </section>
    </main>
  );
}

export default App;
