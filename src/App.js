import { React } from "react";

import "./styles.scss";
import "./fontawesome";

import Header from "./components/Header";
import NewTodo from "./components/NewTodo";

export default function App() {
  return (
    <>
      <main>
        <section className="container">
          <Header />
          <NewTodo />
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
    </>
  );
}
