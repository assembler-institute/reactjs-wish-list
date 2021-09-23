/* eslint-disable prettier/prettier */
import React from "react";
import TodoList from "../../components/TodoList";

export default class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }


  render() {
    return (
      <>
        <TodoList {...this.props} />
      </>
    )
  }
}