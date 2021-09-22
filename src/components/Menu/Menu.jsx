import React from "react"
import "./Menu.scss"

export default class Menu extends React.Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <div className="menu-container d-flex justify-content-between align-items-center px-3">
        <div>5 items left</div>
        <div>All Active Completed</div>
        <div>Clear completed</div>
      </div>
    )
  }
}