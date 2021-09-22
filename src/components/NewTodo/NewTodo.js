import React, { Component } from "react";

export default class NewTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeHolder: "New Todo",
      title: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ title: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { saveNewTasks } = this.props;
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

    e.target.reset();
    retrieve.push(todoTask);
    localStorage.setItem(`list`, JSON.stringify(retrieve));

    saveNewTasks(retrieve);
  }

  render() {
    const { placeHolder } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder={placeHolder}
          onChange={this.handleChange}
        />
        <button type="submit">↩</button>
      </form>
    );
  }
}
