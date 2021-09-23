import React from "react";
import Background from "./components/Background";
import ChangeMode from "./components/ChangeMode";
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
    this.handleCheckbox = this.handleCheckbox.bind(this);
  }

  handleEmptyInput(event) {}

  handleAddTodo(event) {
    let task;
    if (event.key === "Enter") {
      if (event.target.value == "") {
        console.log("EMPTY");
      }
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

  handleCheckbox() {
    this.props.todo.completed = !this.props.todo.completed;
    console.log(this.props.todo.completed);
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
                    <TodoList
                      handleCheckbox={this.handleCheckbox}
                      todos={todos}
                    />
                    <Menu todos={todos} />
                  </div>
                ) : (
                  <div className="list-container bg-white shadow mt-4 p-2 ">
                    <h4
                      data-testid="no-todos"
                      className="m-0 text-center text-danger"
                    >
                      Create a new task please
                    </h4>
                  </div>
                )}
              </div>
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default App;
