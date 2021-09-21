import React, { Component } from "react";

class TodoForm extends Component{
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return(
      <form className="card-body">
      <input type="text" placeholder="insert text here" />
      <ul className="list-group list-group-flush">
        <li className="list-group-item is-disabled" aria-disabled="true">
          <input type="checkbox" name="name1" id="" />
          <label htmlFor="name1">(lo que venga del input de arriba)</label>
        </li>
        <li className="list-group-item">
          <input type="checkbox" name="name2" id="" />
          <label htmlFor="name2">(lo que venga del input de arriba)</label>
        </li>
        <li className="list-group-item">
          <input type="checkbox" name="name3" id="" />
          <label htmlFor="name3">(lo que venga del input de arriba)</label>
        </li>
        <li className="list-group-item">
          <input type="checkbox" name="name4" id="" />
          <label htmlFor="name4">(lo que venga del input de arriba)</label>
        </li>
      </ul>
    </form>
    )
  }
}

export default TodoForm