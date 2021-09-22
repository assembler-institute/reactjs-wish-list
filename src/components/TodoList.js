import React from "react";

import Todo from "./Todo";

const TodoList = ({ todoItems, setTodoItems, setStatus }) => {
  // eslint-disable-next-line
  console.log(todoItems);

  const statusHandler = (e) => {
    console.log(e.target.value);
    setStatus(e.target.value);
  };

  return (
    <div className="list-container">
      <ul className="list-items">
        {todoItems.map((todoItem) => (
          <Todo
            text={todoItem.text}
            key={todoItem.id}
            todoItems={todoItems}
            todoItem={todoItem}
            setTodoItems={setTodoItems}
          />
        ))}
      </ul>
      <button type="button" value="all" onClick={statusHandler}>
        All
      </button>
      <button type="button" value="active" onClick={statusHandler}>
        Active
      </button>
      <button type="button" value="complete" onClick={statusHandler}>
        Complete
      </button>
    </div>
  );
};

export default TodoList;
