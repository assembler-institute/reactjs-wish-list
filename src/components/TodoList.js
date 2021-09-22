import React from "react";

import Todo from "./Todo";

const TodoList = ({ todoItems, setTodoItems }) => {
  // eslint-disable-next-line
  console.log(todoItems);
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
    </div>
  );
};

export default TodoList;
