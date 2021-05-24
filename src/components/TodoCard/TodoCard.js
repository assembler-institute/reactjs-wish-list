import React, { Component } from "react";

import "./TodoCard.scss";

class TodoCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { toDo } = this.props;

    return (
      <div className="flex-row card-wide">
        <label>
          <input
            type="checkbox"
            name="completed"
            className="blue-checkbox clickable"
          />
        </label>
        <span className="font-bold font-big full-width">{toDo}</span>
        <div>
          <i className="bi bi-x-lg font-light clickable" />
        </div>
      </div>
    );
  }
}

export default TodoCard;
