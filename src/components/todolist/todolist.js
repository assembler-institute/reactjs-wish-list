import React from "react";
import Todo from "../Todo";
import "./todolist.scss";
import NoTodo from "../NoTodo";

function TodoList({ todos, handleIsActive, deleteTodo }) {
  if (todos.length === 0) {
    return <NoTodo />;
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
