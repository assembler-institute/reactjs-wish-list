import React from "react";
import img from "./img/header-light-mode-background-image.jpeg";
import DarkMode from "./components/DarkMode";
import NewTodo from "./components/NewTodo";
import NoTodo from "./components/NoTodo/NoTodo";
import TodoList from "./components/TodoList";
import "./main.scss";

function App() {
  return (
    <>
      <div className="background">
        <div className="background--top">
          <img src={img} alt="bg-img" />
        </div>
        <div className="background--bottom" />
      </div>
      <main className="main">
        <header className="main--header">
          <h1>TODOS</h1> <DarkMode />
        </header>
        <section className="main__window">
          <div>
            <NewTodo /> {/* Input for adding the Tasks */}
          </div>
          <div className="todo__body">
            <div id="todo-list">
              {localStorage.getItem("list") ? <TodoList /> : <NoTodo />}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
