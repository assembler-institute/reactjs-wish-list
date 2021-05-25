import React, { Component } from "react";

import "./TodoCard.scss";

class TodoCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      newEditedText: "",
      isDone: false,
      showHideSidenav: "show",
      divHidden: "hidden",
    };
    this.deleteTodo = this.deleteTodo.bind(this);
    this.editToDo = this.editToDo.bind(this);
    this.manageNewtoDoText = this.manageNewtoDoText.bind(this);
    this.submitEdit = this.submitEdit.bind(this);
    this.toggleChange = this.toggleChange.bind(this);
    this.hoverDivIn = this.hoverDivIn.bind(this);
    this.hoverDivOut = this.hoverDivOut.bind(this);
  }

  toggleChange() {
    const { isDone } = this.state;

    if (isDone) {
      this.setState({
        showHideSidenav: "show",
      });
    } else {
      this.setState({
        showHideSidenav: "taskDone",
      });
      setTimeout(() => {
        this.setState({
          showHideSidenav: "hidden",
        });
      }, 1000);
    }

    this.setState({
      isDone: !isDone,
    });
  }

  hoverDivIn() {
    this.setState({
      divHidden: "divHover",
    });
  }

  hoverDivOut() {
    this.setState({
      divHidden: "hidden",
    });
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
    const { editMode, newEditedText, isDone, showHideSidenav, divHidden } =
      this.state;

    return (
      <div className={showHideSidenav}>
        {!editMode ? (
          <div
            className="flex-row card-wide"
            onMouseEnter={this.hoverDivIn}
            onMouseLeave={this.hoverDivOut}
          >
            <label>
              <input
                type="checkbox"
                name="completed"
                defaultChecked={isDone}
                className="blue-checkbox clickable"
                onChange={this.toggleChange}
              />
            </label>
            <span className="font-bold font-big full-width">{toDo}</span>
            <div className={`d-flex ${divHidden}`}>
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
          </div>
        ) : (
          <>
            <form onSubmit={this.submitEdit} className="flex-row card-widetWo">
              <label className="flex-row card-widetWo">
                <input
                  type="text"
                  name="newToDoText"
                  placeholder="edit ToDo"
                  value={newEditedText}
                  onChange={this.manageNewtoDoText}
                  className="font-bold font-big full-width input-no-border"
                />
              </label>
              <button type="submit" className="btn-submit btn btn-light">
                Save
              </button>
            </form>
          </>
        )}
      </div>
    );
  }
}

export default TodoCard;
