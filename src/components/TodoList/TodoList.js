import { Component } from "react";

export default class TodoList extends Component {
  construct(props) {
    super(props);
  }

  render() {
    const { todos, handleDelete, handleSetDone, handleSetText } = this.props;

    return (
      <ul>
        {todos.map((item) => (
          <li>
            <TodoItem {...todos} handleDelete={handleDelete} handleSetDone={handleSetDone} handleSetText={handleSetText} />
          </li>
        ))}
      </ul>
    );
  }
}
