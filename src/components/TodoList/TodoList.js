import { Component } from "react";
import TodoItem from "../TodoItem";

export default class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      enabledFormId: null,
    };

    this.enableForm = this.enableForm.bind(this);
    this.disableForm = this.disableForm.bind(this);
  }

  enableForm(id) {
    this.setState((prevState) => ({
      ...prevState,
      enabledFormId: id,
    }));
  }

  disableForm() {
    this.setState((prevState) => ({
      ...prevState,
      enabledFormId: null,
    }));
  }

  render() {
    const { todos, handleDelete, handleSetDone, handleSetText } = this.props;
    const { enabledFormId } = this.state;

    return (
      <ul>
        {todos.map((item) => (
          <li key={item.id}>
            <TodoItem
              handleDelete={handleDelete}
              handleSetDone={handleSetDone}
              handleSetText={handleSetText}
              handleEnableForm={this.enableForm}
              handleDisableForm={this.disableForm}
              enabledForm={item.id === enabledFormId}
              {...item}
            />
          </li>
        ))}
      </ul>
    );
  }
}
