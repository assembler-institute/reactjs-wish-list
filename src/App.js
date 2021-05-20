import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <div className="general-background d-flex flex-column">
        <div className="top-background">
          <img
            className="img-background"
            src="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1955&q=80"
            alt="bck-img"
          />
        </div>
        <div className="bottom-background" />
      </div>
      <main className="container mt-5 main-container">
        <div className="main-header">
          <h1 className="main-header-title">T O D O</h1>
          <i className="uil uil-moon" />
        </div>
        <CreateTodo />
        <BrowserRouter>
          <Route
            path="/"
            exact
            render={(routeProps) => <TodoList {...routeProps} />}
          />
          <Route
            path="/active"
            exact
            render={(routeProps) => <TodoList {...routeProps} />}
          />
          <Route
            path="/completed"
            exact
            render={(routeProps) => <TodoList {...routeProps} />}
          />
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
