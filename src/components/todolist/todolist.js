import React from "react";
import Todo from "../Todo";
import "./todolist.scss";
import NoTodo from "../NoTodo";

function TodoList({ todos, handleIsActive, deleteTodo }) {
  // eslint-disable-next-line
  // console.log(this.state);
  const completed = todos.filter((todo) => todo.isActive === true);
  const active = todos.filter((todo) => todo.isActive === false);

  if (todos.length === 0) {
    return <NoTodo />;
  }
  if (active > 0 && completed > 0) {
    return (
      <section className="todo-list">
        <ul>
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              id={todo.id}
              content={todo.content}
              isActive={todo.isActive}
              handleIsActive={handleIsActive}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
      </section>
    );
  }
  if (active > 0 && completed === 0) {
    return (
      <section className="todo-list">
        <ul>
          <li>error</li>
        </ul>
      </section>
    );
  }
  return (
    <section className="todo-list">
      <ul>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            content={todo.content}
            isActive={todo.isActive}
            handleIsActive={handleIsActive}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </section>
  );
}

export default TodoList;
