import React from "react";
import Todo from "../Todo";
import "./TodoList.scss";

export default function TodoList({
  todos,
  handleDone,
  handleDelete,
  handleEditedTodo,
}) {
  return (
    <section className="row todo-list-section mx-0">
      <div className="col col-12 p-0">
        {todos.map(
          // eslint-disable-next-line
          (todo) => (
            <Todo
              key={todo.id}
              id={todo.id}
              text={todo.text}
              done={todo.done}
              handleDone={handleDone}
              handleDelete={handleDelete}
              handleEditedTodo={handleEditedTodo}
            />
          ),
        )}
      </div>
    </section>
  );
}
