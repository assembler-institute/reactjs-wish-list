import React from "react";
import "./_Todo.scss";
import TodoItem from "../TodoItem";

function Todo({
  todos,
  handleDelete,
  handleEditing,
  submitNewTitle,
  handleSelected,
}) {
  // eslint-disable-next-line
  // console.log("que recive", todos);
  return (
    <div className="main-todo-container">
      <ul className="todo_print">
        {todos.map((todo) => (
          <TodoItem
            submitNewTitle={submitNewTitle}
            handleDelete={handleDelete}
            handleEditing={handleEditing}
            handleSelected={handleSelected}
            key={todo.id}
            text={todo.title}
            todo={todo}
          />
        ))}
      </ul>
    </div>
  );
}
export default Todo;
