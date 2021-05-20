import React from "react";
import AddTodo from "../../AddTodo/AddTodo";
import TodoList from "../../TodoList/TodoList";

import "./Main.scss";

export default function Main({
  id,
  todo,
  todoList,
  active,
  editTodo,
  handleChange,
  handleSubmit,
  handleCompleteTodo,
  handleEdit,
}) {
  return (
    <div className="main">
      <AddTodo
        id={id}
        todo={todo}
        todoList={todoList}
        active={active}
        editTodo={editTodo}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <TodoList
        todoList={todoList}
        active={active}
        editTodo={editTodo}
        handleCompleteTodo={handleCompleteTodo}
        handleEdit={handleEdit}
      />
    </div>
  );
}
