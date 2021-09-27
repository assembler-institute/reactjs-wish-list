import React from "react"

import checkImg from "../../assets/icons/check.svg"

import "./TodoItem.scss"
import classNames from "classnames"

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
    const { id, task, completed } = this.props.todo
    const { isDarkMode } = this.props

    let taskClass = classNames({ "task-completed": completed }, { "task-pending": !completed }, { "text-light": isDarkMode })

    let labelClass = "label ";
    labelClass += classNames(completed ? "label-active" : "")

    let iconClass = classNames({ "text-light": isDarkMode })

    return (
      <li data-testid="todo-item" className="list-element d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <label className={labelClass} htmlFor={`checkbox-${id}`}>{completed ? <img className="check-image" src={checkImg} alt="Checked"/> : ""}</label>
          <input id={`checkbox-${id}`} className="d-none" checked={completed} data-testid="create-todo-input" onChange={this.handleCheckboxTask} type="checkbox" />
          <p className={`ml-2 mb-0 ${ taskClass }`}>{task}</p>
        </div>

        <div className="d-flex">
          <div onClick={this.handleEditTask} className={`mb-0 task-button ${iconClass}`}>&#9998;</div>
          <div onClick={this.handleDeleteTask} className={`mb-0 task-button ${iconClass}`}>&#10006;</div>
        </div>
      </li>
    )
  }
}