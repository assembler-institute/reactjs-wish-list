import React, { Component } from "react";

class NewTodoCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      contador: 0,
    };
    this.formManagement = this.formManagement.bind(this);
  }

  formManagement(event) {
    const { inputText } = this.state;

    this.setState({
      inputText: event.target.value,
    });

    console.log(inputText);
  }

  render() {
    const { inputText, contador } = this.state;

    return (
      <form className="flex-row card-wide no-border">
        <label>
          <input type="checkbox" name="completed" className="blue-checkbox" />
        </label>
        <label>
          <input
            type="text"
            name="newTodo"
            placeholder="New Todo"
            value={inputText}
            onChange={this.formManagement}
            className="font-bold font-big full-width input-no-border"
          />
        </label>
        <button type="submit" className="btn-submit">
          Submit
        </button>
        <span>{contador}</span>
      </form>
    );
  }
}

export default NewTodoCard;
