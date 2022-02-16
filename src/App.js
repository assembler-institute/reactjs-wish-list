import React from "react";
import TaskInput from "./components/TaskInput";
import "./app.scss";

function App() {
  return (
    <>
      <header />
      <main>
        <h1 className="title">TODO</h1>
        <article>
          <TaskInput />
        </article>
      </main>
    </>
  );
}

export default App;
