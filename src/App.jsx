import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ToDoContainer from "./components/ToDoContainer/ToDo";
import { Title } from "./components/Title/Title";
import "./App.scss";

function App() {
  return (
    <>
      <Router>
        <Title />
        <ToDoContainer />
      </Router>
    </>
  );
}

export default App;
