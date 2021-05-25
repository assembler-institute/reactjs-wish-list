import React from "react";
import { useLocation } from "react-router-dom";

import Todo from "../Todo";
import "./TodoList.scss";
import Footer from "../layout/Footer";
import emptyBird from "../../img/empty.svg";

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
  if (location.pathname === "/" && todoList.length > 0) {
    return (
      <div className="TodoList">
        <ul className="list-group">
          {todoList.map((todo) => {
            return (
              <Todo
                key={todo.id}
                id={todo.id}
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
        <Footer handleClear={handleClear} todoList={todoList} />
      </div>
    );
  }

  const activeList = todoList.filter((todo) => todo.completed === false);

  if (location.pathname === "/active" && activeList.length > 0) {
    return (
      <div className="TodoList">
        <ul className="list-group">
          {activeList.map((todo) => {
            return (
              <Todo
                key={todo.id}
                id={todo.id}
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
        <Footer handleClear={handleClear} todoList={todoList} />
      </div>
    );
  }

  const completedList = todoList.filter((todo) => todo.completed === true);

  if (location.pathname === "/completed" && completedList.length > 0) {
    return (
      <div className="TodoList">
        <ul className="list-group">
          {completedList.map((todo) => {
            return (
              <Todo
                key={todo.id}
                id={todo.id}
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
        <Footer handleClear={handleClear} todoList={todoList} />
      </div>
    );
  }

  return (
    <div className="TodoList empty">
      <ul className="list-group">
        <h2>All seems clear here</h2>
        <img src={emptyBird} alt="This list is empty" />
      </ul>
      <Footer handleClear={handleClear} todoList={todoList} />
    </div>
  );
}
