import React from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, Reorder } from "framer-motion/dist/framer-motion";

import "./ToDoList.scss";
import ToDoItem from "../ToDoItem/ToDoItem";
import noTodosImg from "../../img/no_todos.svg";

const todoVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom },
  }),
  removed: { opacity: 0 },
};

export default function ToDoList({
  data,
  handleDelete,
  isCompleted,
  emptyError,
  handleError,
  toggleEditing,
  handleClear,
  reorderList,
  theme,
}) {
  return (
    <div className="list-container">
      {data.length > 0 && (
        <Reorder.Group
          axis="y"
          values={data}
          onReorder={reorderList}
          className="todos-container"
          data-testid="todos-list"
        >
          <AnimatePresence>
            {data.map((item, index) => (
              <Reorder.Item
                value={item}
                key={item.id}
                variants={todoVariants}
                initial="hidden"
                animate="visible"
                exit="removed"
                layoutId={item.id}
                custom={(index + 1) * 0.2}
                data-testid="todo-item"
              >
                <ToDoItem
                  data={data}
                  id={item.id}
                  text={item.text}
                  done={item.done}
                  label={item.label}
                  isEditing={item.isEditing}
                  emptyError={emptyError}
                  handleError={handleError}
                  toggleEditing={() => toggleEditing(item.id)}
                  handleDone={() => isCompleted(item.id)}
                  handleDelete={() => handleDelete(item.id)}
                  theme={theme}
                />
              </Reorder.Item>
            ))}
          </AnimatePresence>
        </Reorder.Group>
      )}
      {!data.length && (
        <div className="emptyTodosContainer" data-testid="no-todos">
          <img src={noTodosImg} alt="" className="noTodos" />
          <h3>Please write your first ToDo</h3>
        </div>
      )}
      <footer className="mt-auto" data-testid="app-footer">
        <span className="items-left">
          {data.length === 1
            ? `${data.length} todo left`
            : `${data.length} todos left`}
        </span>
        <div className="items-status">
          <Link to="/">All</Link>
          <Link to="/active">Active</Link>
          <Link to="/completed">Completed</Link>
        </div>
        <button type="button" className="clear-completed" onClick={handleClear}>
          Clear Completed
        </button>
      </footer>
    </div>
  );
}
