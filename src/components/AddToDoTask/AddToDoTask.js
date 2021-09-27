/* eslint-disable prettier/prettier */
import React from "react";
import "./AddToDoTask.scss";
import { generateNewKey } from "../../utils/localStorage";

// Improve the render of the component

export default class AddToDoTask extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      error: false,
    };
  }

  formSubmit = (event) => {
    event.preventDefault();

    const { error, title } = this.state;
    const { handlerNewToDo } = this.props;
    
    if (title.length === 0) this.setState({error: true})

    if (!error && title !== "") {
      const key = generateNewKey();
      const taskObj = {
        id: key,
        inputValue: title,
        done: false,
        isEditing: false,
      };

      // Send new task to App
      handlerNewToDo(taskObj);

      // Reset input state
      this.updateState({ title: "", error: false });
    }
  };

  handlerInput = (event) => {
    const text = event.target.value;
    const error = text.length === 0;

    this.updateState({ text, error });
  };

  updateState = ({ text = "", error }) => {
    this.setState({ title: text, error: error });
  };

  render() {
    const { title, error } = this.state;
    return (
      <>
        <form onSubmit={this.formSubmit} className="mb-2">
          <input
            className="form-control"
            placeholder="Do the homework..."
            data-testid="create-todo-input"
            type="text"
            value={title}
            onChange={this.handlerInput}
          />
        </form>
        <div
          data-testid="create-todo-error-message"
          className={error ? `show alert alert-danger` : `hide`}
          role="alert"
        >
          Please enter at least one character
        </div>
      </>
    );
  }
}
