import React from "react";

import "./styles.scss";

function App() {
  return (
    <main>
      <section className="container">
        <section className="header">
          <h1>Hola mundo</h1>
          <p>darkMode</p>
        </section>
        <section className="new-todo">
          <article>Input new todo</article>
        </section>
        <section className="todo-list">
          <ul>
            <li>Todo list</li>
          </ul>
        </section>
        <section className="footer">
          <article>Active number</article>
          <article>Menu All / Active / Completed</article>
          <article>Delete completed</article>
        </section>
      </section>
    </main>
  );
}

export default App;
