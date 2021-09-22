import React from "react"
import TodoItem from "../TodoItem"
import "./TodoList.scss"

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { todos } = this.props
    return (
      <ul className="w-100 mt-4 bg-white todo-list">
        {todos.map(todo => {
          return <TodoItem key={todo.id} todo={todo} />
        })}
      </ul>
    )
  }
}