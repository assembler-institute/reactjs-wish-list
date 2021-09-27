import React, { Component } from "react";
import TodoForm from "../TodoForm";
// import TodoItem from '../TodoItem/TodoItem'
import { Button } from "../Button/Button.style"
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      showTodos: "all",
    };
  }
  addTodo = (todo) => {
    const newTodo = [todo, ...this.state.todos]; // empieza con el array todo, y hace un push
    this.setState({ todos: newTodo });
  };

  showTodos = (string) => {
    this.setState({ showTodos: string });
  };

  toggleCompleted = (completedId) => {
    this.setState({
      todos: this.state.todos.map((item) => {
        if (item.id === completedId) {
          return {
            id: item.id,
            text: item.text,
            completed: !item.completed,
          };
        } else {
          return item;
        }
      }),
    });
  };

  onDelete = (id) => {
    this.setState({
      todos: this.state.todos.filter(item => item.id !== id)
    })
  }
  deleteCompleted = () => {
    this.setState({
      todos: this.state.todos.filter((notDelete) => !notDelete.completed),
    });
  };

  render() {
    let { showTodos, todos } = this.state;
    if (showTodos === "all") {
      todos = todos;
    } else if (showTodos === "active") {
      todos = todos.filter((counter) => !counter.completed);
    } else if (showTodos === "completed") {
      todos = todos.filter((counter) => counter.completed);
    }
    return (
      <>
        <TodoForm onSubmit={this.addTodo} />

        <ul className="list-group list-group-flush">
          {todos.map((item) => (
            <li className="list-group-item d-flex justify-content-between align-items-center" key={item.id}>
              <div className="d-flex align-items-center">
                <input
                  className="checkbox"
                  type="checkbox"
                  name={item.id}
                  onClick={() => this.toggleCompleted(item.id)}
                />
                <label
                  className={`ml-2 mb-0 ${item.completed ? "is-disabled": ""}`}
                  contentEditable="true"
                  htmlFor={item.id}
                >
                  {item.text}
                </label>
              </div>
              <Button onClick={() => this.onDelete(item.id)}>&times;</Button>
            </li>
          ))}
        </ul>

        <footer className="card-footer text-muted d-flex justify-content-between align-items-center">
          <span className="text-tag">
            {todos.filter((counter) => !counter.completed).length} items left
          </span>
          <div className="d-flex">
            <Button className="text-tag" onClick={() => this.showTodos("all")}>
              All
            </Button>
            <Button
              className="text-tag px-2"
              onClick={() => this.showTodos("active")}
            >
              Active
            </Button>
            <Button
              className="text-tag"
              onClick={() => this.showTodos("completed")}
            >
              Completed
            </Button>
          </div>
          <Button className="text-tag" onClick={this.deleteCompleted}>
            Clear Completed
          </Button>
        </footer>
      </>
    );
  }
}
export default TodoList;
