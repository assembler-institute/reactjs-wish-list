import React from "react";

import Todo from "../Todo";
import "./TodoList.scss";
import Footer from "../layout/Footer";

export default function TodoList({
  todoList,
  completed,
  active,
  editTodo,
  handleCompleteTodo,
  handleEdit,
}) {
  return (
    <div className="TodoList">
      <ul className="list-group my-5">
        {todoList.map((todo) => {
          return (
            <Todo
              key={todo.id}
              title={todo.title}
              completed={completed}
              active={active}
              editTodo={editTodo}
              handleCompleteTodo={() => handleCompleteTodo(todo.id)}
              handleEdit={() => handleEdit(todo.id)}
            />
          );
        })}
      </ul>
      <Footer />
    </div>
  );
}
