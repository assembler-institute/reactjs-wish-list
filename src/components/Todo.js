import React from "react";

const Todo = ({ text, todoItem, todoItems, setTodoItems }) => {
  // Delete item handler
  const deleteItemHandler = () => {
    setTodoItems(todoItems.filter((el) => el.id !== todoItem.id));
  };

  // Complete check item handler
  const completeItemHandler = () => {
    setTodoItems(
      todoItems.map((item) => {
        if (item.id === todoItem.id) {
          return {
            ...item,
            done: !item.done,
          };
        }
        return item;
      }),
    );
  };

  return (
    <div className="todo">
      <div className="todo-title">
        <button type="button" onClick={completeItemHandler}>
          <i className="fas fa-check" />{" "}
        </button>
        <li className={`todo-item ${todoItem.done ? "done" : ""}`}>{text}</li>
      </div>
      <button type="button" onClick={deleteItemHandler}>
        <i className="fas fa-trash-alt" />{" "}
      </button>
    </div>
  );
};

export default Todo;
