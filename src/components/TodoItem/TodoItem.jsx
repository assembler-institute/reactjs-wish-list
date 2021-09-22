import React from "react"

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { task } = this.props.todo
    return (
      <li className="d-flex align-items-center">
          <input type="checkbox" />
          <p className="ml-2 mb-0">{task}</p>
      </li>
    )
  }
}