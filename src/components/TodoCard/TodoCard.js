import React, { Component } from "react";

import "./TodoCard.scss";

class TodoCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  deleteTodo() {
    const { selectedTodoToDelete, id } = this.props;
    selectedTodoToDelete(id);
    // console.log(this);
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
        <div className="d-flex">
          <button type="button" className="btn-submit btn btn-light">
            Edit
          </button>
          <button
            className="material-icons md-dark orange600 clickable btn-submit btn btn-light"
            type="button"
            onClick={this.deleteTodo}
          >
            delete
          </button>
        </div>
      </div>
    );
  }
}

export default TodoCard;
