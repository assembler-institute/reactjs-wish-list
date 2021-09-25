import React from "react";
import Background from "./components/Background";
import ChangeMode from "./components/ChangeMode";
import TodoList from "./components/TodoList";
import Menu from "./components/Menu";
import Toast from "./components/Toast";
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
    this.handleDelete = this.handleDelete.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleEditName = this.handleEditName.bind(this);
    this.handleClearAll = this.handleClearAll.bind(this);
  }

  handleCheckbox(todo) {
    let test = this.state.todos.find((stateTodo) => {
      return stateTodo.id === todo.id;
    });
    test.completed = !test.completed;

    let newTodoList = this.state.todos.map((prevTodo) => {
      return prevTodo.id === todo.id ? test : prevTodo;
    });
    // console.log(newTodoList);
    this.setState({ todos: newTodoList });
  }

  handleEdit(id) {
    let test = this.state.todos.find((stateTodo) => {
      return stateTodo.id === id;
    });
    test.isEditing = !test.isEditing;

    let newTodoList = this.state.todos.map((prevTodo) => {
      return prevTodo.id === id ? test : prevTodo;
    });
    this.setState({ todos: newTodoList });
  }

  handleEditName(id, newTask) {
    let test = this.state.todos.find((stateTodo) => {
      return stateTodo.id === id;
    });
    test.task = newTask;

    let newTodoList = this.state.todos.map((prevTodo) => {
      return prevTodo.id === id ? test : prevTodo;
    });
    this.setState({ todos: newTodoList });
  }

  handleDelete(id) {
    const newTodoList = this.state.todos.filter((todo) => {
      if (todo.id !== id) {
        return todo;
      }
    });
    this.setState({ todos: newTodoList });
  }

  handleEmptyInput() {
    var toastLiveExample = document.getElementById("liveToast");
    toastLiveExample.style.opacity = "1";
    setTimeout(() => {
      toastLiveExample.style.opacity = "0";
    }, 2000);
  }

  handleAddTodo(event) {
    let task;
    if (event.key === "Enter") {
      if (event.target.value == "") {
        this.handleEmptyInput();
        return;
      }
      task = event.target.value;
      let newToDo = {
        id: new Date().getTime(),
        task: task,
        completed: false,
        isEditing: false,
      };

      this.setState((prevState) => ({
        todos: [...prevState.todos, newToDo],
      }));

      event.target.value = null;
    }
  }

  handleClearAll() {
    let pendingTodos = this.state.todos.filter((completedTodo) => {
      return completedTodo.completed == false;
    });
    this.setState({ todos: pendingTodos });
  }

  readLocalStorage() {
    let todos = JSON.parse(localStorage.getItem("todos"));
    if (todos != null) {
      this.setState(todos);
    }
  }

  writeLocalStorage() {
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
  }

  componentDidMount() {
    this.readLocalStorage();
  }

  componentDidUpdate() {
    this.writeLocalStorage();
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
                      handleEdit={this.handleEdit}
                      handleEditName={this.handleEditName}
                      todos={todos}
                      handleDelete={this.handleDelete}
                    />
                    <Menu todos={todos} handleClearAll={this.handleClearAll} />
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
          <Toast />
        </main>
      </>
    );
  }
}

export default App;
