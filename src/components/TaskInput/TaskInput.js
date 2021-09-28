import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { saveIntoLocal } from "../../utils/demo";
// recieves the new todo to create it.
// stores it in the localstorage area
// input type

// eslint-disable-next-line react/prefer-stateless-function
export default class TaskInput extends Component {
  constructor(props) {
    super(props);

    const { text } = this.props;
    this.text = text;

    const { name } = this.props;
    this.name = name;

    const { id } = this.props;
    this.id = id;
    // eslint-disable-next-line
    console.log("this is get in props ", this.props);
    const { handleSubmit } = this.props;
    const { handleClick } = this.props;
    const { getTaskList } = this.props;

    this.handleSubmit = handleSubmit;
    this.handleClick = handleClick;
    this.getTaskList = getTaskList;
    // eslint-disable-next-line
    console.log("this is get ", getTaskList);

    function handleKeyPress(e) {
      if (e.key === "Enter") {
        // eslint-disable-next-line
        console.log("enter press here! ");
        this.handleSubmit(e);
        this.getTaskList;
      }
    }

    function handleOnClick(e) {
      e.preventDefault();
      const idClicked = e.target.getAttribute("taskid");
      saveIntoLocal("taskEditing", { taskid: idClicked });
    }

    this.handleKeyPress = handleKeyPress.bind(this);
    this.handleOnClick = handleOnClick.bind(this);
  }

  render() {
    return (
      <div className="input-container">
        <Form>
          <Form.Group className="mb-3" controlId="taskInput">
            <Form.Control
              key={this.id}
              name={this.name}
              taskid={this.id}
              type="input"
              onClick={this.handleOnClick}
              defaultValue={this.text}
              placeholder="Write your new task here"
              onKeyPress={this.handleKeyPress}
            />
          </Form.Group>
        </Form>
      </div>
    );
  }
}
