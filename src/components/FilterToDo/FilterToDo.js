/* eslint-disable prettier/prettier */
import React from 'react'
import { Link } from 'react-router-dom'
import './FilterToDo.scss'

export default class FilterToDo extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }


  render() {
    const {counter, handlerClearCompleted} = this.props

    return (
      <>
        <nav className="navbar rounded flex-wrap">
          <span className="flex-fill small text-center">{counter > 1 ? `${counter} todos left` : `${counter} todo left` }</span>
          <div className="navbar-nav flex-row flex-wrap justify-content-center">
            <Link to="/" className="nav-link">All</Link>
            <Link to="/active" className="nav-link">Active</Link>
            <Link to="/completed" className="nav-link">Completed</Link>
            <button type="button" data-testid="clear-completed-todos" className="btn btn-primary" onClick={handlerClearCompleted}>Clear completed <span role="img" aria-label="checkbox">✔️</span></button>
          </div>
          </nav>
      </>
    )
  }
}