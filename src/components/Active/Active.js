import React, { Component } from "react";

import TodoListActive from "../TodoListActive/TodoListActive";

export default class Active extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { tasks, removeTask, completeTask } = this.props;
    const finished = (el) => el.isFinished === false;
    return (
      <>
        {tasks.some(finished) ? (
          <TodoListActive
            tasks={tasks}
            removeTask={removeTask}
            completeTask={completeTask}
          />
        ) : (
          <NoTodo />
        )}
      </>
    );
  }
}
