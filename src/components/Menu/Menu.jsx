import React from "react"
import { Link } from "react-router-dom";
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
        <div className="text-muted">{totalPendingTasks} items left</div>
        <div>
          <Link className="link-element mr-1 text-decoration-none text-secondary font-weight-bold" to="/">All</Link>
          <Link className="link-element mr-1 text-decoration-none text-secondary font-weight-bold" to="/active">Active</Link>
          <Link className="link-element text-decoration-none text-secondary font-weight-bold" to="/completed">Completed</Link>
          </div>
        <div className="clear-all font-weight-bold" data-testid="clear-completed-todos" onClick={handleClearAll}>Clear completed</div>
      </footer>
    )
  }
}