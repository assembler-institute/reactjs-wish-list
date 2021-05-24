import React from "react";

import TodosContainer from "../TodosContainer";

function TodoListing({
  allTodos,
  handleRemove,
  handleChecked,
  handleEditTodo,
  handleAddToComplete,
  handleAddToActive,
}) {
  return (
    <>
      {allTodos.map((todo) => (
        <TodosContainer
          key={todo.id}
          id={todo.id}
          name={todo.name}
          isComplete={todo.complete}
          handleRemove={handleRemove}
          handleChecked={handleChecked}
          handleAddToComplete={handleAddToComplete}
          handleAddToActive={handleAddToActive}
          handleEditTodo={handleEditTodo}
        />
      ))}
    </>
  );
}

export default TodoListing;
