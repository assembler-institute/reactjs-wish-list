import "./_Form.scss";
import React, { Component } from "react";

class newForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      id: 0,
      selected: false,
    };
    this.handleInput = this.handleInput.bind(this);
    this.submitTitle = this.submitTitle.bind(this);
  }

  handleSelected() {
    let { selected } = this.state;
    selected = true;
    this.setState({
      selected: selected,
    });
    // eslint-disable-next-line
    console.log("Este es el valor", selected);
  }

  handleInput(event) {
    let { title } = this.state;
    title = event.target.value;
    this.setState({
      title: title,
    });
    // eslint-disable-next-line
    console.log("Este es titile", title);
  }

  submitTitle(event) {
    if (event.key === "Enter") {
      const { ...newTodos } = this.state;
      const { newTodo } = this.props;
      let { id } = this.state;
      id = Math.random();
      newTodo(newTodos);

      this.setState({
        title: "",
        id: id,
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
