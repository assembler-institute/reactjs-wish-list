/* eslint-disable prettier/prettier */
import React from "react";
import TodoList from "../../components/TodoList";

export default class Active extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }


  render() {

    const {tasks} = this.props
    const activeTasks = tasks.filter(task => !task.done)

    return (
      <>
        <TodoList {...this.props} tasks={activeTasks} />
      </>
    )
  }
}