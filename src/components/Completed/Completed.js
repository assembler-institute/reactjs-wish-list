import React, { Component } from "react";

import TodoListCompleted from "../TodoListCompleted/TodoListCompleted";
import NoTodo from "../NoTodo/NoTodo";

export default class Completed extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { tasks, removeTask, completeTask, editTask, changeTitle } =
      this.props;
    const finished = (el) => el.isFinished;
    return (
      <>
        {tasks.some(finished) ? (
          <TodoListCompleted
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
