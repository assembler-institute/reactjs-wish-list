import React from "react";
import Todo from "../Todo";
import MainFooter from "../MainFooter";
import "./TodoList.scss";

export default function TodoList({
  todos,
  handleDone,
  handleDelete,
  todosLeft,
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
            />
          ),
        )}
      </div>
      <MainFooter todosLeft={todosLeft} />
    </section>
  );
}

//  toggleTodo={toggleTodo}
