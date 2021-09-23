import { Component } from "react";
import TodoItem from "../TodoItem";
import NoTodoPreview from "../NoTodoPreview";

import "./TodoList.scss";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { todos, handleDelete, handleSetDone, handleSetText, handleIsEditing } = this.props;

    return (
      <div className="todo-list">
        {todos.length > 0 ? (
          <ul>
            {todos.map((item) => (
              <li key={item.id}>
                <TodoItem handleDelete={handleDelete} handleSetDone={handleSetDone} handleSetText={handleSetText} handleIsEditing={handleIsEditing} {...item} />
              </li>
            ))}
          </ul>
        ) : (
          <NoTodoPreview />
        )}
      </div>
    );
  }
}
