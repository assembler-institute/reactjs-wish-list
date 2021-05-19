import React from "react";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Todo from "./components/Todo";
import "./_App.scss";

function App() {
  return (
    <main className="background_container">
      <Header />
      <section className="parent_container">
        <h1>TODO</h1>
        <Form />
        <Todo />
      </section>
    </main>
  );
}

export default App;
