import React from "react"
import "./TodoItem.scss"

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props)

    this.handleDeleteTask = this.handleDeleteTask.bind(this);
    this.handleCheckboxTask = this.handleCheckboxTask.bind(this);
    this.handleEditTask = this.handleEditTask.bind(this)
  }

  handleDeleteTask() {
    const { handleDelete} = this.props
    const {id} = this.props.todo
    handleDelete(id);
  }

  handleEditTask() {
    const { handleEdit } = this.props
    const {id} = this.props.todo
    handleEdit(id);
  }

  handleCheckboxTask() {
    const {todo, handleCheckbox} = this.props;
    handleCheckbox(todo);
  } 

  render() {
    const { task, completed } = this.props.todo
    return (
      <li data-testid="todo-item" className="list-element d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <input checked={completed} data-testid="create-todo-input" onChange={this.handleCheckboxTask} type="checkbox" />
          <p className="ml-2 mb-0">{task}</p>
        </div>

        <div className="d-flex">
          <div onClick={this.handleEditTask} className="mb-0 task-button">&#9998;</div>
          <div onClick={this.handleDeleteTask} className="mb-0 task-button">&#10006;</div>
        </div>
      </li>
    )
  }
}