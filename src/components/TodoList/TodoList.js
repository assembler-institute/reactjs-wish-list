/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { v4 as uuidv4 } from "uuid";
import EmptyTodo from "../EmptyTodo";
import Todo from "../Todo";
import "./TodoList.scss";

function TodoList({ todos = [], handleRemove }) {
  function printTodos() {
    return todos.map((todo) => (
      <Todo key={uuidv4()} handleRemove={handleRemove} todo={todo} />
    ));
  }

  return (
    <main className="main container">
      <section className="row">
        {todos.length ? printTodos() : <EmptyTodo />}
      </section>

      <section className="row main__footer">
        <span>5 items left</span>
        <div>
          <button type="button">All</button>
          <button type="button">Active</button>
          <button type="button">Completed</button>
        </div>
        <button type="button">Clear completed</button>
      </section>
    </main>
  );
}

export default TodoList;
