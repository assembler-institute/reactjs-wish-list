import React, { Component } from "react";

import Todo from "../Todo/Todo";

export function updateLocal() {
  return JSON.parse(localStorage.getItem("list"));
}

export default class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const local = updateLocal();
    return (
      <ul className="list">
        {local.map((item) => {
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
