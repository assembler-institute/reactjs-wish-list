import React, { Component } from "react";

import TodoListActive from "../TodoListActive/TodoListActive";
import NoTodo from "../NoTodo/NoTodo";

export default class Active extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { tasks, removeTask, completeTask, editTask, changeTitle } =
      this.props;
    const finished = (el) => el.isFinished === false;
    return (
      <>
        {tasks.some(finished) ? (
          <TodoListActive
            tasks={tasks}
            removeTask={removeTask}
            completeTask={completeTask}
            editTask={editTask}
            changeTitle={changeTitle}
          />
        ) : (
          <NoTodo />
        )}
      </>
    );
  }
}
