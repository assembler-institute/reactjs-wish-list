import React from "react";

// import layout
import Header from "../../components/layout/Header";
import Main from "../../components/layout/Main";

import "./Home.scss";

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
}) {
  return (
    <div className="home">
      <main>
        <section>
          <div className="upper_home">
            <div className="central_home">
              <Header />
              <Main
                id={id}
                todo={todo}
                todoList={todoList}
                active={active}
                editTodo={editTodo}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                handleCompleteTodo={handleCompleteTodo}
                handleEdit={handleEdit}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
