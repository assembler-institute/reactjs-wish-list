import React from "react";
import Background from "./components/Background";
import ChangeMode from "./components/ChangeMode";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import Menu from "./components/Menu";
import "./App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: JSON.parse(localStorage.getItem("todos"))
        ? JSON.parse(localStorage.getItem("todos"))
        : [],
    };

    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleAddTodo(event) {
    let task;
    if (event.key === "Enter") {
      task = event.target.value;
      let newToDo = {
        id: new Date().getTime(),
        task: task,
        completed: false,
      };

      this.setState((prevState) => ({
        todos: [...prevState.todos, newToDo],
      }));

      event.target.value = null;
    }
  }

  componentDidMount() {
    let todos = JSON.parse(localStorage.getItem("todos"));
    if (todos != null) {
      this.setState(todos);
    }
  }

  componentDidUpdate() {
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
  }

  render() {
    const { todos } = this.state;
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
                <input
                  onKeyDown={this.handleAddTodo}
                  id="inputNewToDo"
                  type="text"
                  className="w-100 mt-4 new-todo shadow"
                ></input>
                {todos.length > 0 ? (
                  <div className="list-container bg-white shadow">
                    <TodoList todos={todos} />
                    <Menu />
                  </div>
                ) : (
                  <div className="list-container bg-white shadow mt-4 p-2 ">
                    <h4 className="m-0 text-center text-danger">
                      Create a new task please
                    </h4>
                  </div>
                )}
                {}
              </div>
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default App;
