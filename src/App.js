import React from "react";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <main className="container mt-5">
      <section className="row">
        <div className="row row-12">
          <NewTodo /> {/* Input for adding the Tasks */}
        </div>
        <div id="todo-list">{localStorage.getItem("list") && <TodoList />}</div>
      </section>
    </main>
  );
}

export default App;
