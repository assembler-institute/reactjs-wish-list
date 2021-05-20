import React, { Component } from "react";

import { v4 as uuidv4 } from "uuid";

function addTodoDetails(todo) {
  const uniqueId = uuidv4();
  return {
    ...todo,
    id: uniqueId,
    key: uniqueId,
    isComplete: false,
  };
}
class NewTodoCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { saveNewTodo } = this.props;
    const TodoData = addTodoDetails(this.state);
    saveNewTodo(TodoData);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { title } = this.state;
    return (
      <form
        className="flex-row card-wide no-border"
        onSubmit={this.handleSubmit}
      >
        <label>
          <input type="checkbox" name="completed" className="blue-checkbox" />
        </label>
        <label>
          <input
            type="text"
            name="title"
            placeholder="New Todo"
            className="font-bold font-big full-width input-no-border"
            value={title}
            onChange={this.handleChange}
          />
        </label>
      </form>
    );
  }
}

export default NewTodoCard;
