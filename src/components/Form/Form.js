import "./_Form.scss";
import React, { Component } from "react";

class newForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    const { title } = this.state;
    // eslint-disable-next-line
    console.log(this.props);
    // newTodo(title);
    this.setState({
      title: event.target.value,
    });
    // eslint-disable-next-line
    console.log(title);  
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
        />
        <button type="button" onClick={this.newTodo} />
      </>
    );
  }
}
export default newForm;
