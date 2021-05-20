import React from "react";

import "./TodoList.scss";

import TodoCard from "../TodoCard/index";
import CardFooter from "../CardFooter/index";
import noTodoImg from "../../img/undraw_fill_form_re_cwyf.svg";

export default function TodosList({
  todos,
  handleCompleted,
  handleTodoChange,
  ...props
}) {
  const todoMap = (
    <section className="whiteBg">
      {todos.map((todo) => (
        <TodoCard
          key={todo.id}
          id={todo.id}
          title={todo.title}
          isComplete={todo.isComplete}
          handleCompleted={handleCompleted}
          handleTodoChange={handleTodoChange}
        />
      ))}
    </section>
  );
  const noTodos = (
    <section className="whiteBg">
      <hr />
      <h4 className="text-center">Create your first Todo to get started</h4>
      <hr />
      <img src={noTodoImg} alt="" className="mid-img img-center" />
      <hr />
    </section>
  );
  return (
    <div className="shadow roundedCorner" props={props}>
      {todos[0] ? todoMap : noTodos}

      <CardFooter />
    </div>
  );
}
