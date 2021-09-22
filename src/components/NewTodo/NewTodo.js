import React from "react";
import ReactDOM from "react-dom";
import TodoList from "../TodoList";
import "./NewTodo.scss";

export default class NewTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      holder: "Add New Todo...",
      title: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ title: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { title } = this.state;
    let retrieve = JSON.parse(localStorage.getItem(`list`));

    // if there is no data then make it an empty array, to be able to push data in array afterwards

    if (retrieve === null) {
      retrieve = [];
    }

    const todoTask = {
      title: title,
      isFinished: false,
      id: Math.floor(Math.random() * 1000000),
    };

    retrieve.push(todoTask);
    localStorage.setItem(`list`, JSON.stringify(retrieve));

    e.target.reset();

    ReactDOM.render(
      <React.StrictMode>
        <TodoList />
      </React.StrictMode>,
      document.getElementById("todo-list"),
    );
  }

  render() {
    const { holder } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="new__task">
          <span className="new__task--circle" />
          <input
            type="text"
            placeholder={holder}
            onChange={this.handleChange}
            required
            className="new__task--input"
          />
          <button type="submit" className="new__task--btn">
            ↵
          </button>
        </div>
      </form>
    );
  }
}
