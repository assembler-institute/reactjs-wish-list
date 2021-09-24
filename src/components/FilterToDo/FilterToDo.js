/* eslint-disable prettier/prettier */
import React from 'react'
import { Link } from 'react-router-dom'

export default class FilterToDo extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }


  render() {
    const {counter, handlerClearCompleted} = this.props

    return (
      <>
        <div className="d-flex">

          <p>{counter}</p>

            <Link to="/">All</Link>
            <Link to="/active">Active</Link>
            <Link to="/completed">Completed</Link>

          <button type="button" onClick={handlerClearCompleted}>Clear completed</button>

        </div>
      </>
    )
  }
}