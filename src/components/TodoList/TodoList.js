import React, { Component } from "react";

import Todo from "../Todo/Todo";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { tasks } = this.props;
    return (
      <ul className="list">
        {tasks.map((item) => {
          return (
            <Todo
              key={item.id}
              title={item.title}
              id={item.id}
              isFinished={item.isFinished}
            />
          );
        })}
      </ul>
    );
  }
}
