import React from "react";
import { useLocation } from "react-router-dom";

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
  handleClear,
}) {
  const location = useLocation();
  if (location.pathname === "/") {
    return (
      <div className="TodoList">
        <ul className="list-group">
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
        <Footer handleClear={handleClear} />
      </div>
    );
  }

  const activeList = todoList.filter((todo) => todo.completed === false);

  if (location.pathname === "/active") {
    return (
      <div className="TodoList">
        <ul className="list-group">
          {activeList.map((todo) => {
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
        <Footer handleClear={handleClear} />
      </div>
    );
  }

  const completedList = todoList.filter((todo) => todo.completed === true);

  if (location.pathname === "/completed") {
    return (
      <div className="TodoList">
        <ul className="list-group">
          {completedList.map((todo) => {
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
        <Footer handleClear={handleClear} />
      </div>
    );
  }
}
