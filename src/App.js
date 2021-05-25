import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";
import "./style.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [myToDos, setMyToDos] = useState([]);
  const [myStatus, setMyStatus] = useState("All");
  const [filterMyToDos, setFilterMyToDos] = useState([]);

  const filterHandler = () => {
    switch (myStatus) {
      case "Completed":
        setFilterMyToDos(myToDos.filter((todo) => todo.completed === true));
        break;
      case "No completed":
        setFilterMyToDos(myToDos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilterMyToDos(myToDos);
        break;
    }
  };

  const myLocalStorage = () => {
    localStorage.setItem("myToDos", JSON.stringify(myToDos));
  };

  useEffect(() => {
    filterHandler();
    myLocalStorage();
  }, [myToDos, myStatus]);

  const getMyLocalStorage = () => {
    if (localStorage.getItem("myToDos") === null) {
      localStorage.setItem("myToDos", JSON.stringify([]));
    } else {
      const myLocalInfo = JSON.parse(localStorage.getItem("myToDos"));
      setMyToDos(myLocalInfo);
    }
  };

  useEffect(() => {
    getMyLocalStorage();
  }, []);

  return (
    <div>
      <header>
        <h1 className="todo-title">TODO</h1>
      </header>
      <Form
        inputText={inputText}
        myToDos={myToDos}
        setMyToDos={setMyToDos}
        setInputText={setInputText}
        setMyStatus={setMyStatus}
      />
      <ToDoList
        filterMyToDos={filterMyToDos}
        myToDos={myToDos}
        setMyToDos={setMyToDos}
      />
    </div>
  );
}

export default App;
