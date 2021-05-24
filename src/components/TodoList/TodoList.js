import React from "react";
import { render } from "@testing-library/react";
import Todo from "../Todo";
import MainFooter from "../MainFooter";
import NoTodos from "../NoTodos";
import "./TodoList.scss";

const classNames = require("classnames");

export default function TodoList({
  todos,
  hasTodos,
  darkMode,
  handleDone,
  handleDelete,
  handleEditedTodo,
  todosLeft,
}) {
  render();
  {
    // Conditional class
    const darkModeClass = classNames({
      "row todo-list-section custom-section mx-0 d-flex": true,
      "custom-section-dark": darkMode,
    });

    return (
      <section className={darkModeClass}>
        <div className="col col-12 p-0 list-wrapper">
          {!hasTodos ? (
            <div className="no-todos d-flex align-items-center">
              <NoTodos />
            </div>
          ) : (
            todos.map((todo) => (
              <Todo
                key={todo.id}
                id={todo.id}
                text={todo.text}
                done={todo.done}
                darkMode={darkMode}
                handleDone={handleDone}
                handleDelete={handleDelete}
                handleEditedTodo={handleEditedTodo}
              />
            ))
          )}
        </div>
        <MainFooter todosLeft={todosLeft} />
      </section>
    );
  }
}
