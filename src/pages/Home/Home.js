import React from "react";

// import layout
import Header from "../../components/layout/Header";
import Main from "../../components/layout/Main";

import AddTodo from "../../components/AddTodo";
import TodoList from "../../components/TodoList";

import "./Home.scss";
import DarkMode from "../../components/DarkMode";

export default function Home({
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
}) {
  return (
    <div className="home">
      <DarkMode />
      <main>
        <section>
          <div className="upper_home">
            <div className="central_home">
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
                <TodoList
                  todoList={todoList}
                  active={active}
                  editTodo={editTodo}
                  handleCompleteTodo={handleCompleteTodo}
                  handleEdit={handleEdit}
                  handleRemove={handleRemove}
                  handleClear={handleClear}
                />
              </Main>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
