import React from "react";
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import "./app.scss";

function App() {
  return (
    <main>
      <Header />
      <article>
        <TaskInput />
      </article>
    </main>
  );
}

export default App;
