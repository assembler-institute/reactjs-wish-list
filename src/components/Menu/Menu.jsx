import React from "react"
import "./Menu.scss"

export default class Menu extends React.Component {
  constructor (props) {
    super(props)
  }

  render() {
    let totalPendingTasks = this.props.todos.filter(todo => !todo.completed).length
    return (
      <div className="menu-container d-flex justify-content-between align-items-center px-3">
        <div>{totalPendingTasks} items left</div>
        <div>All Active Completed</div>
        <div>Clear completed</div>
      </div>
    )
  }
}