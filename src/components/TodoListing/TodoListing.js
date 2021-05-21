import React from "react";

import TodosContainer from "../TodosContainer";

function TodoListing({ allTodos, handleRemove, handleEditTodo }) {
  return (
    <>
      {allTodos.map((todo) => (
        <TodosContainer
          key={todo.id}
          id={todo.id}
          name={todo.name}
          isComplete={todo.complete}
          handleRemove={handleRemove}
          handleEditTodo={handleEditTodo}
        />
      ))}
    </>
  );
}

export default TodoListing;
