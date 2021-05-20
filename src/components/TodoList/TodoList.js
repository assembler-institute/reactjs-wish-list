import React from "react";
import "./TodoList.scss";
// import Todo from "../Todo";

export default function TodoList({ todos, toggleTodo }) {
  return (
    <section className="row todo-list-section">
      <div className="col col-12">
        {todos}
        {toggleTodo}
      </div>
    </section>
  );
  //   return todos.map((todo) => {
  //     return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />;
  //   });
}
