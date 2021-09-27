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
        <nav className="navbar bg-light rounded">
          <span className="">{counter > 1 ? `${counter} todos left` : `${counter} todo left` }</span>
              <div className="navbar-nav flex-row">
                <Link to="/" className="nav-link">All</Link>
                <Link to="/active" className="nav-link">Active</Link>
                <Link to="/completed" className="nav-link">Completed</Link>
                <button type="button" className="btn btn-success" onClick={handlerClearCompleted}>Clear completed</button>
              </div>
          </nav>
      </>
    )
  }
}