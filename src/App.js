import React from "react";
import NewTodo from "./components/NewTodo";

function App() {
  return (
    <main className="container mt-5">
      <section className="row">
        <div className="row row-12">
          <NewTodo />
        </div>
      </section>
    </main>
  );
}

export default App;
