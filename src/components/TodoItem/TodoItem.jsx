import React from "react"

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props)

    this.handleCheckbox = this.handleCheckbox.bind(this)
  }

  handleCheckbox() {
    this.props.todo.completed = !this.props.todo.completed;
  }

  render() {
    const checked = this.props.todo.completed ? "checked" : "unchecked";
    console.log(checked);
    const { task } = this.props.todo
    return (
      <li className="d-flex align-items-center">
          <input onChange={this.handleCheckbox} type="checkbox" />
          <p className="ml-2 mb-0">{task}</p>
      </li>
    )
  }
}