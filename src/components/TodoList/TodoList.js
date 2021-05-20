import React from "react";

import Todo from "../Todo";
import "./TodoList.scss";
import Footer from "../layout/Footer";

export default function TodoList({
  todoList,
  active,
  editTodo,
  handleCompleteTodo,
  handleEdit,
  handleRemove,
}) {
  return (
    <div className="TodoList">
      <ul className="list-group my-5">
        {todoList.map((todo) => {
          return (
            <Todo
              key={todo.id}
              title={todo.title}
              active={active}
              editTodo={editTodo}
              completed={todo.completed}
              handleCompleteTodo={() => handleCompleteTodo(todo.id)}
              handleEdit={() => handleEdit(todo.id)}
              handleRemove={() => handleRemove(todo.id)}
            />
          );
        })}
      </ul>
      <Footer />
    </div>
  );
}
