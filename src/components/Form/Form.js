import "./_Form.scss";
import React, { Component } from "react";

class newForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      selected: true,
    };
    this.handleInput = this.handleInput.bind(this);
    this.submitTitle = this.submitTitle.bind(this);
  }

  handleSelected() {
    const { selected } = this.state;
    this.setState({
      selected: false,
    });
    // eslint-disable-next-line
    console.log("Este es el valor", selected);
  }

  handleInput(event) {
    const { title } = this.state;
    this.setState({
      title: event.target.value,
    });
    // eslint-disable-next-line
    console.log("Este es titile", title);
  }

  submitTitle(event) {
    if (event.key === "Enter") {
      const { title } = this.state;
      const { newTodo } = this.props;
      newTodo(title);
      this.setState({
        title: "",
      });
    }
  }

  render() {
    const { title } = this.state;
    return (
      <>
        <input
          type="text"
          className="form_input"
          value={title}
          onChange={this.handleInput}
          onKeyPress={this.submitTitle}
          placeholder="Write what you have to do an press Enter key"
        />
      </>
    );
  }
}
export default newForm;
