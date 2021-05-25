import React from "react";

import Footer from "../Footer";

import Header from "../Header";
import Todo from "../Todo";

function Active({
  todos,
  submitNewTitle,
  handleDelete,
  handleSelected,
  newTodo,
}) {
  return (
    <>
      <main className="background_container">
        <Header />
        <section className="parent_container">
          <h1>TODO</h1>
          <Todo
            newTodo={newTodo}
            submitNewTitle={submitNewTitle}
            handleDelete={handleDelete}
            handleSelected={handleSelected}
            todos={todos}
          />
          <Footer />
        </section>
      </main>
    </>
  );
}

export default Active;
