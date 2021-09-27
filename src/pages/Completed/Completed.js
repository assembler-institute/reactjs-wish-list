/* eslint-disable prettier/prettier */
import React from "react";
import TodoList from "../../components/TodoList";

export default class Completed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { tasks } = this.props;
    const completedTasks = tasks.filter((task) => task.done);

    return (
      <>
        <TodoList {...this.props} tasks={completedTasks} />
      </>
    );
  }
}
