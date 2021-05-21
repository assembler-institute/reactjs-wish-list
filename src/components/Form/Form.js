import "./_Form.scss";
import React, { Component } from "react";

class newForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoIt: {
        title: "",
        id: 0,
        selected: false,
      },
    };
    this.handleInput = this.handleInput.bind(this);
    this.submitTitle = this.submitTitle.bind(this);
  }

  handleSelected() {
    const { todoIt } = this.state;
    todoIt.selected = true;
    this.setState({
      todoIt: todoIt,
    });
    // eslint-disable-next-line
    console.log("Este es el valor", todoIt.selected);
  }

  handleInput(event) {
    const { todoIt } = this.state;
    todoIt.title = event.target.value;
    this.setState({
      todoIt: todoIt,
    });
    // eslint-disable-next-line
    console.log("Este es titile", todoIt.title);
  }

  submitTitle(event) {
    if (event.key === "Enter") {
      const { ...todoIt } = this.state;
      const { newTodo } = this.props;
      newTodo(todoIt);
      todoIt.title = "";
      todoIt.id = Math.random() * 1000;
      this.setState({
        todoIt: todoIt,
      });
    }
  }

  render() {
    const { todoIt } = this.state;
    return (
      <>
        <input
          type="text"
          className="form_input"
          value={todoIt.title}
          onChange={this.handleInput}
          onKeyPress={this.submitTitle}
          placeholder="Write what you have to do an press Enter key"
        />
      </>
    );
  }
}
export default newForm;
