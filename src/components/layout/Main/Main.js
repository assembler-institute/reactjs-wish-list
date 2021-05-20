import React from "react";
import AddTodo from "../../AddTodo/AddTodo";
import TodoList from "../../TodoList/TodoList";

import "./Main.scss";

export default function Main({
  id,
  todo,
  todoList,
  completed,
  active,
  editTodo,
  handleChange,
  handleSubmit,
  handleCompleteTodo,
  handleEdit,
  handleRemove,
}) {
  return (
    <div className="main">
      <AddTodo
        id={id}
        todo={todo}
        todoList={todoList}
        completed={completed}
        active={active}
        editTodo={editTodo}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <TodoList
        todoList={todoList}
        completed={completed}
        active={active}
        editTodo={editTodo}
        handleCompleteTodo={handleCompleteTodo}
        handleEdit={handleEdit}
        handleRemove={handleRemove}
      />
    </div>
  );
}
