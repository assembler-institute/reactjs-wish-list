import React, { Component } from "react";

import TodoList from "../TodoList/TodoList";
import NoTodo from "../NoTodo/NoTodo";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { tasks, removeTask, completeTask, editTask, changeTitle } =
      this.props;
    return (
      <>
        {tasks[0] ? (
          <TodoList
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
