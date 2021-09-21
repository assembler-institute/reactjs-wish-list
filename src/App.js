import React from "react";

import TodoForm from "./components/TodoForm";
import TodoFooter from "./components/TodoFooter"

function App() {
  return (
    <div className="position-relative">
      <section className="padding-15 mb-4 bg-image-hero"></section>
      <main className="card position-absolute absolute-center">{/*  card */}
        <header className="card-header">
          <h1>TODO</h1>
        </header>
        <TodoForm />
        <TodoFooter />
      </main>
      <footer className="text-center">
        <p>Drag and drop to reorder list</p>
      </footer>
    </div>
  );
}

export default App;
