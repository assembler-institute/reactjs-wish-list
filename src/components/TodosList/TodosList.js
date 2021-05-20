import React from "react";

import TodoCard from "../TodoCard/index";
import CardFooter from "../CardFooter/index";

export default function TodosList({ todos, handleCompleted, ...props }) {
  return (
    <div className="shadow roundedCorner" props={props}>
      <section className="whiteBg">
        {todos.map((todo) => (
          <TodoCard
            key={todo.id}
            id={todo.id}
            text={todo.text}
            isComplete={todo.isComplete}
            handleCompleted={handleCompleted}
          />
        ))}
      </section>
      <CardFooter />
    </div>
  );
}
