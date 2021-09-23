import React from "react"
import "./TodoItem.scss"

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props)

    this.handleCheckbox = this.handleCheckbox.bind(this)
  }

  handleCheckbox() {
    this.props.todo.completed = !this.props.todo.completed;
  }

  render() {
    // const checked = this.props.todo.completed ? "checked" : "unchecked";
    // console.log(checked);
    const { task } = this.props.todo
    return (
      <li className="list-element d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <input onChange={this.handleCheckbox} type="checkbox" />
          <p className="ml-2 mb-0">{task}</p>
        </div>
        <p className="mb-0 delete-task">&#10006;</p>
      </li>
    )
  }
}