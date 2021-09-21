import { Component } from "react";
import TodoItem from "../TodoItem";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { todos, handleDelete, handleSetDone, handleSetText } = this.props;

    return (
      <ul>
        {todos.map((item) => (
          <li>
            <TodoItem {...item} handleDelete={handleDelete} handleSetDone={handleSetDone} handleSetText={handleSetText} />
          </li>
        ))}
      </ul>
    );
  }
}
