import React from "react";

export default class NewTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "New Todo",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ title: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    const { title } = this.state;
    let retrieve = JSON.parse(localStorage.getItem(`list`));

    // if there is no data then make it an empty array, to be able to push data in array afterwards

    if (retrieve === null) {
      retrieve = [];
    }

    const todoTask = {
      title: title,
      isFinished: false,
    };

    retrieve.push(todoTask);
    localStorage.setItem(`list`, JSON.stringify(retrieve));
  }

  render() {
    const { title } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder={title} onChange={this.handleChange} />
        <button type="submit">↩</button>
      </form>
    );
  }
}
