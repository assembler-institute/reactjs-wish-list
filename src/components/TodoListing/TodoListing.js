import React from "react";

import TodosContainer from "../TodosContainer";

function TodoListing({ allTodos, handleRemove }) {
  return (
    <>
      {allTodos.map((todo) => (
        <TodosContainer
          key={todo.id}
          id={todo.id}
          value={todo.name}
          isComplete={todo.complete}
          handleRemove={handleRemove}
        />
      ))}
    </>
  );
}

export default TodoListing;
