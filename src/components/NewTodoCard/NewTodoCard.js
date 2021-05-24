import React, { Component } from "react";

class NewTodoCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      validation: true,
    };
    this.formManagement = this.formManagement.bind(this);
    this.submit = this.submit.bind(this);
  }

  formManagement(event) {
    // const { inputText } = this.state;

    this.setState({
      inputText: event.target.value,
    });

    // console.log(inputText);
  }

  submit(event) {
    const { inputText } = this.state;
    // eslint-disable-next-line no-unused-vars
    const { validation } = this.state;
    const { newToDo } = this.props;

    event.preventDefault();

    if (inputText.trim() !== "") {
      newToDo(inputText);
      this.setState({
        validation: true,
        inputText: "",
      });
    } else {
      this.setState({
        validation: false,
      });
    }

    // console.log(inputText);
    // console.log(newTodo);
    // console.log(this.props);
    // console.log(this);
  }

  render() {
    const { inputText, validation } = this.state;

    return (
      <div>
        <form className="flex-row card-wide no-border" onSubmit={this.submit}>
          <label>
            <input type="checkbox" name="completed" className="blue-checkbox" />
          </label>
          <label>
            <input
              type="text"
              name="newTodo"
              placeholder="New Todo"
              value={inputText}
              onChange={this.formManagement}
              className="font-bold font-big full-width input-no-border"
            />
          </label>
          <div className="d-flex flex-row">
            <button
              type="submit"
              className="btn-submit btn btn-light justify-content-end"
            >
              Submit
            </button>
          </div>
        </form>
        {!validation && (
          <div className="validation"> Añada una tarea, por favor</div>
        )}
      </div>
    );
  }
}

export default NewTodoCard;
