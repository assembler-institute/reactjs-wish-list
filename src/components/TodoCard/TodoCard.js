import React, { Component } from "react";

import "./TodoCard.scss";

class TodoCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      newEditedText: "",
    };
    this.deleteTodo = this.deleteTodo.bind(this);
    this.editToDo = this.editToDo.bind(this);
    this.manageNewtoDoText = this.manageNewtoDoText.bind(this);
    this.submitEdit = this.submitEdit.bind(this);
  }

  editToDo() {
    // const { editMode } = this.state;

    this.setState({
      editMode: true,
    });
  }

  manageNewtoDoText(event) {
    this.setState({
      newEditedText: event.target.value,
    });
  }

  submitEdit(event) {
    const { updateToDo, id } = this.props;
    const { newEditedText } = this.state;

    event.preventDefault();

    updateToDo(id, newEditedText);
    this.setState({
      newEditedText: "",
      editMode: false,
    });
  }

  deleteTodo() {
    const { selectedToDoToDelete, id } = this.props;
    selectedToDoToDelete(id);
    // console.log(this);
  }

  render() {
    const { toDo } = this.props;
    const { editMode, newEditedText } = this.state;

    return (
      <div className="flex-row card-wide">
        {!editMode ? (
          <>
            <label>
              <input
                type="checkbox"
                name="completed"
                className="blue-checkbox clickable"
              />
            </label>
            <span className="font-bold font-big full-width">{toDo}</span>
            <div className="d-flex">
              <button
                type="button"
                className="btn-submit btn btn-light"
                onClick={this.editToDo}
              >
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
          </>
        ) : (
          <>
            <form onSubmit={this.submitEdit}>
              <label>
                <input
                  type="text"
                  name="newToDoText"
                  value={newEditedText}
                  onChange={this.manageNewtoDoText}
                />
              </label>
              <button type="submit">Save</button>
            </form>
          </>
        )}
      </div>
    );
  }
}

export default TodoCard;
