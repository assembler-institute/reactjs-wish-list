import React from "react";
import Background from "./components/Background";
import ChangeMode from "./components/ChangeMode";
import NewTodo from "./components/NewTodo"
import TodoList from "./components/TodoList"
import Menu from "./components/Menu"
import "./App.scss";

class App extends React.Component {

  

  // handleInput() {
  //   const 
  // }


  render() {
    return (
      <>
        <Background />
        <main className="container pt-5 main-width">
          <section className="row">
            <div className="col col-12">
              <header className="d-flex justify-content-between align-items-center">
                <h1>TODO</h1>
                <ChangeMode />
              </header>
              <div>
                <NewTodo />
                <div className="list-container bg-white shadow">
                  <TodoList todos={[]} />
                  <Menu />
                </div>
              </div>
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default App;
