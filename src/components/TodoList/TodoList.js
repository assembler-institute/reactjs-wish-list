import React from "react";
import { v4 as uuidv4 } from "uuid";

import AppFooter from "../AppFooter";
import EmptyTodo from "../EmptyTodo";
import Todo from "../Todo";

import "./TodoList.scss";

function TodoList({
  todos = [],
  handleRemove,
  handleChangeCheck,
  handleEdit,
  handleEditSubmit,
  handleResetEdit,
  handleClearCompleted,
}) {
  function printTodos() {
    return todos.map((todo) => (
      <Todo
        key={uuidv4()}
        handleChangeCheck={handleChangeCheck}
        handleRemove={handleRemove}
        handleEdit={handleEdit}
        handleEditSubmit={handleEditSubmit}
        handleResetEdit={handleResetEdit}
        todo={todo}
      />
    ));
  }

  return (
    <main className="main">
      <section>{todos.length ? printTodos() : <EmptyTodo />}</section>

      <AppFooter todos={todos} handleClearCompleted={handleClearCompleted} />
    </main>
  );
}

export default TodoList;
