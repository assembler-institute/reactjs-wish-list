import React from "react";
import Todo from "../Todo";
import NoTodos from "../NoTodos";
import "./TodoList.scss";

export default function TodoList({
  todos,
  hasTodos,
  handleDone,
  handleDelete,
  handleEditedTodo,
}) {
  return (
    <section className="row todo-list-section mx-0">
      <div className="col col-12 p-0 list-wrapper">
        {!hasTodos ? (
          <div className="no-todos d-flex justify-content-center align-items-center">
            <NoTodos />
          </div>
        ) : (
          todos.map((todo) => (
            <Todo
              key={todo.id}
              id={todo.id}
              text={todo.text}
              done={todo.done}
              handleDone={handleDone}
              handleDelete={handleDelete}
              handleEditedTodo={handleEditedTodo}
            />
          ))
        )}
      </div>
    </section>
  );
}
