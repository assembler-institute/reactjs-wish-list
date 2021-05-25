import React from "react";

// import layout
import Header from "../Header";
import Main from "../Main";

import AddTodo from "../../AddTodo";
import TodoList from "../../TodoList";

import "./Template.scss";

import DarkMode from "../../DarkMode";

export default function Template({
  id,
  todo,
  todoList,
  active,
  editTodo,
  handleChange,
  handleSubmit,
  handleCompleteTodo,
  handleEdit,
  handleRemove,
  handleClear,
  hasError,
}) {
  return (
    <div className="mainScreen">
      <DarkMode />
      <div className="upperScreen">
        <div className="middleScreen">
          <Header />
          <Main>
            <AddTodo
              id={id}
              todo={todo}
              todoList={todoList}
              active={active}
              editTodo={editTodo}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
            {hasError && (
              <div>
                <h2>Something went wrong...</h2>
              </div>
            )}
            {!hasError && (
              <TodoList
                todoList={todoList}
                active={active}
                editTodo={editTodo}
                handleCompleteTodo={handleCompleteTodo}
                handleEdit={handleEdit}
                handleRemove={handleRemove}
                handleClear={handleClear}
              />
            )}
          </Main>
        </div>
      </div>
    </div>
  );
}
