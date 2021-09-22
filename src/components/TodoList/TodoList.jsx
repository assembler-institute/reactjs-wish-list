import React from "react"
import TodoItem from "../TodoItem"
import "./TodoList.scss"

export default class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [{id: 1, task: "Tarea 1", completed: false}, {id: 2, task: "Tarea 2", completed: false}]
    }
    this.addToDo = this.addToDo.bind(this)
  }

  addToDo() {

  }

  render() {
    const { todos } = this.state
    return (
      <ul className="w-100 mt-4 bg-white todo-list">
        {todos.map(todo => {
          return <TodoItem key={todo.id} todo={todo} />
        })}
      </ul>
    )
  }
}