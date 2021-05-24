import React from "react";

import Footer from "../Footer";
import Form from "../Form";
import Header from "../Header";
import Todo from "../Todo";

import "../../_App.scss";

function Home({
  newTodo,
  todos,
  handleDelete,
  handleSelected,
  handleEditing,
  submitNewTitle,
  closeEditMode,
}) {
  return (
    <>
      <main className="background_container">
        <Header />
        <section className="parent_container">
          <h1>TODO</h1>
          <Form newTodo={newTodo} />
          <Todo
            closeEditMode={closeEditMode}
            submitNewTitle={submitNewTitle}
            newTodo={newTodo}
            todos={todos}
            handleDelete={handleDelete}
            handleSelected={handleSelected}
            handleEditing={handleEditing}
          />
          <Footer />
        </section>
      </main>
    </>
  );
}

export default Home;
