import React, { Component } from "react";
import TodoForm from "../TodoForm";
// import TodoItem from '../TodoItem/TodoItem'
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      showTodos: "all",
    };
  }
  addTodo = (todo) => {
    const newTodo = [todo, ...this.state.todos]; // empieza con el array todo, y hace un push
    this.setState({ todos: newTodo });
  };

  showTodos = (string) => {
    this.setState({ showTodos: string });
  };

  toggleCompleted = (completedId) => {
    this.setState({ 
      todos: this.state.todos.map((item) => {
       if(item.id === completedId){
         return {
           id: item.id,
           text: item.text,
           completed: !item.completed,
         }
       } else{
         return item;
       }
      })
    })
  }

  deleteCompleted = () => {
    this.setState({todos: this.state.todos.filter((notDelete) => !notDelete.completed)})
  }

  render() {
    let { showTodos, todos } = this.state;
    if (showTodos === "all") {
      todos = todos;
    } else if (showTodos === "active") {
      todos = todos.filter((counter) => !counter.completed);
    } else if (showTodos === "completed") {
      todos = todos.filter((counter) => counter.completed);
    }
    return (
      <>
        <TodoForm onSubmit={this.addTodo} />

        <ul className="list-group list-group-flush">
          {todos.map((item) => (
            <li className="list-group-item" key={item.id}>
              <input type="checkbox" name={item.id} onClick={ () => this.toggleCompleted(item.id) }/>
              <label style={ {textDecoration: item.completed ? "line-through" : "" } } contentEditable="true" htmlFor={item.id}>{item.text}</label>
              <button>X</button>
            </li>
          ))}
        </ul>

        <footer className="card-footer text-muted d-flex justify-content-between align-items-center">
          <span className="text-tag">
            {todos.filter((counter) => !counter.completed).length} items left
          </span>
          <div className="d-flex">
            <button className="text-tag" onClick={() => this.showTodos("all")}>
              All
            </button>
            <button
              className="text-tag px-2"
              onClick={() => this.showTodos("active")}
            >
              Active
            </button>
            <button
              className="text-tag"
              onClick={() => this.showTodos("completed")}
            >
              Completed
            </button>
          </div>
          <button className="text-tag" onClick={this.deleteCompleted}>Clear Completed</button>
        </footer>
      </>
    );
  }
}
export default TodoList;
