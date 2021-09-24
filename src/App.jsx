import React from "react";
import ToDoContainer from "./components/ToDoContainer/ToDo";
import { Title } from "./components/Title/Title";
import "./App.scss";

function App() {
  return (
    <>
      <Title />
      <ToDoContainer />
    </>
  );
}

export default App;
