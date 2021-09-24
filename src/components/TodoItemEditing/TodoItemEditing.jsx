import React from "react"
import "./TodoItemEditing.scss"

export default class TodoItemEditing extends React.Component {
  constructor(props) {
    super(props)
    this.handleInput = this.handleInput.bind(this)
    this.handleEditTask = this.handleEditTask.bind(this)
  }

  handleInput(event) {
    if (event.key === "Enter") {
      const { handleEditName } = this.props
      let id = this.props.todo.id
      let newTask = event.target.value
      handleEditName(id, newTask)
      this.handleEditTask()
    }
  }

  handleEditTask() {
    const { handleEdit } = this.props
    const {id} = this.props.todo
    handleEdit(id);
  }

  render() {
    const { task } = this.props.todo
    return (
      <li data-testid="todo-item" className="list-element d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <input type="text" defaultValue={task} className="ml-2 mb-0 edit-todo" onKeyUp={this.handleInput}/><span className="advice-edit-todo">Press enter to save</span>
        </div>
      </li>
    )
  }
}