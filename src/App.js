import React, { useState } from "react";
import "./App.scss";

// Importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import Header from "./components/Header";

function App() {
  // Not use State
  // Variables in react don´t react to changes
  // So use State , React will know which part of the UI needs to be re-rendered
  // let counter = 0;

  // const incrementer = () => {
  //   counter += 1;
  //   console.log(counter);
  // };

  // Use State
  // In the bracket, get back 2 things: actual state, and the function allowing to change the actual state
  // prev: the last instane of the state
  // const [newCounter, setCounter] = useState(0);

  // const newIncrementer = () => {
  //   // setCounter((prev) => prev + 1);
  //   setCounter(newCounter + 1);
  //   console.log(newCounter);
  // };

  // TODO list
  const [inputText, setInputText] = useState("");
  const [todoItems, setTodoItems] = useState([]);

  return (
    <main className="main-app">
      {/* <h1>Hello React</h1>
      <h2>Counter {counter}</h2>
      <button onClick={incrementer} type="button">
        Click
      </button>

      <h1>Hello New React</h1>
      <h2>Counter {newCounter}</h2>
      <button onClick={newIncrementer} type="button">
        Click
      </button> */}

      <Header />
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todoItems={todoItems}
        setTodoItems={setTodoItems}
      />
      <TodoList todoItems={todoItems} setTodoItems={setTodoItems} />
    </main>
  );
}

export default App;
