import React, { useState } from "react";
import ToDoContainer from "./components/ToDoContainer/ToDo";
import { Title } from "./components/Title/Title";

function App() {
  const [newInput, setNewInput] = useState("");

  return (
    <>
      <Title />
      <ToDoContainer newInput={newInput} setNewInput={setNewInput} />
    </>
  );
}

export default App;
