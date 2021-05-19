import React from "react";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Todo from "./components/Todo";
import "./_App.scss";

function App() {
  return (
    <main className="background_container">
      <section className="parent_container">
        <Header />
        <Form />
        <Todo />
      </section>
    </main>
  );
}

export default App;
