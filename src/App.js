import { React } from "react";

import "./styles.scss";

import Header from "./components/Header";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/todolist";

export default function App() {
  return (
    <>
      <main>
        <section className="container">
          <Header />
          <NewTodo />
          <TodoList />
        </section>
      </main>
    </>
  );
}
