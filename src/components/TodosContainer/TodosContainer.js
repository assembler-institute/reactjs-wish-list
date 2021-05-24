import React, { Component } from "react";
import DeleteButton from "../DeleteButton";
import CompletedButton from "../CompletedButton";
import "./TodosContainer.scss";

class TodosContainer extends Component {
  constructor(props) {
    super(props);

    const { id, name } = this.props;

    this.state = {
      id: id,
      name: name,
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  handleChange(event) {
    this.setState({
      name: event.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const { handleEditTodo } = this.props;
    const { name, id } = this.state;
    handleEditTodo(name, id);
  }

  onBlur() {
    const { name } = this.props;
    this.setState({ name: name });
  }

  render() {
    const { id, name } = this.state;
    const {
      handleRemove,
      handleChecked,
      isComplete,
      handleAddToComplete,
      handleAddToActive,
    } = this.props;

    return (
      <div className="d-flex justify-content-center align-items-center px-3 input-group borders">
        <CompletedButton
          id={id}
          isComplete={isComplete}
          handleChecked={handleChecked}
          handleAddToComplete={handleAddToComplete}
          handleAddToActive={handleAddToActive}
        />
        <form className="mx-1" onSubmit={this.onSubmit}>
          <input
            id={id}
            className="form-control bg-light"
            type="text"
            value={name}
            onBlur={this.onBlur}
            onChange={this.handleChange}
          />
        </form>
        <DeleteButton id={id} handleRemove={handleRemove} />
      </div>
    );
  }
}

export default TodosContainer;
