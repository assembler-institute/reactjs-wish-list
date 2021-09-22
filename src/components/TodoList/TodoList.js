import React, { Component } from "react";
import TodoForm from "../TodoForm";
// import TodoItem from '../TodoItem/TodoItem'
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }
  addTodo = (todo) => {
    const newTodo = [todo, ...this.state.todos]; // empieza con el array todo, y hace un push
    this.setState({ todos: newTodo });
  };
  render() {
    const { todos } = this.state;
    return (
      <>
        <TodoForm onSubmit={this.addTodo} />
        {/* {JSON.stringify(todos)} */}

        <ul className="list-group list-group-flush">
          {todos.map((item) => (
            <li className="list-group-item">
              <input type="checkbox" name={item.id} key={item.id} />
              <label htmlFor={item.id}>{item.text}</label>
            </li>
          ))}
          <li className="list-group-item is-disabled" aria-disabled="true">
            <input type="checkbox" name="name2" id="" />
            <label htmlFor="name2">(lo que venga del input de arriba)</label>
          </li>
        </ul>
      </>
    );
  }
}
export default TodoList;
