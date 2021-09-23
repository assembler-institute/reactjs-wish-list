/* eslint-disable prettier/prettier */
import React from 'react'
import {BrowserRouter, Link } from 'react-router-dom'

export default class FilterToDo extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }


  render() {
    const {counter} = this.props

    return (
      <>
        <div className="d-flex">

          <p>{counter}</p>

          <BrowserRouter>
            <Link to="/">All</Link>
            <Link to="/active">Active</Link>
            <Link to="/completed">Completed</Link>
          </BrowserRouter>

          <button type="button">Clear completed</button>

        </div>
      </>
    )
  }
}