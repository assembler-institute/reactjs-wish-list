import React, { Component } from "react";
import "./TodoList.scss";
import saveNewTask from "../../App";

import Todo from "../Todo/Todo";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { tasks, removeTask, completeTask } = this.props;
    return (
      <ul className="item__list">
        {tasks.map((item) => {
          return (
            <Todo
              key={item.id}
              title={item.title}
              id={item.id}
              isFinished={item.isFinished}
              removeTask={removeTask}
              completeTask={completeTask}
            />
          );
        })}
      </ul>
    );
  }
}
