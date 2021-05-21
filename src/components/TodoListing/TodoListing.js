import React from "react";

import TodosContainer from "../TodosContainer";

function TodoListing({ allTodos }) {
  return (
    <>
      {allTodos.map((todo) => (
        <TodosContainer
          key={todo.id}
          id={todo.id}
          value={todo.name}
          isComplete={todo.complete}
        />
      ))}
    </>
  );
}

export default TodoListing;
