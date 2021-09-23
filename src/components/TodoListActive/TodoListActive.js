import React, { Component } from "react";

import Todo from "../Todo/Todo";

export default class TodoListActive extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { tasks, removeTask, completeTask, changeTitle, editTask } =
      this.props;
    const filteredArr = tasks.filter((item) => item.isFinished === false);
    return (
      <ul className="item__list">
        {filteredArr.map((item) => {
          return (
            <Todo
              key={item.id}
              title={item.title}
              id={item.id}
              isFinished={item.isFinished}
              isEditing={item.isEditing}
              removeTask={removeTask}
              completeTask={completeTask}
              changeTitle={changeTitle}
              editTask={editTask}
            />
          );
        })}
      </ul>
    );
  }
}
