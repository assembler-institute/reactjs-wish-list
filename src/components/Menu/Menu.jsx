import React from "react"
import "./Menu.scss"

export default class Menu extends React.Component {
  constructor (props) {
    super(props)
  }

  render() {
    const {handleClearAll} = this.props
    let totalPendingTasks = this.props.todos.filter(todo => !todo.completed).length
    return (
      <footer data-testid="app-footer" className="menu-container d-flex justify-content-between align-items-center px-3">
        <div>{totalPendingTasks} items left</div>
        <div>All Active Completed</div>
        <div className="clear-all" data-testid="clear-completed-todos" onClick={handleClearAll}>Clear completed</div>
      </footer>
    )
  }
}