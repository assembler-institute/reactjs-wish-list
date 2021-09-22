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

  toggleCompleted = (completdId) => {
    this.setState({ 
      todos: this.state.todos.map((item) => {
       if(item.id === completdId){
         return {
           id: item.id,
           text: item.text,
           completed: !item.completed
         }
       } else{
         return item;
       }
      })
    })
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
        {/* {JSON.stringify(todos)} */}

        <ul className="list-group list-group-flush">
          {todos.map((item) => (
            <div style={ {textDecoration: !item.complete ? "line-through" : "" } } onClick={ () => this.toggleCompleted(item.id) }>{item.text}</div>
            //<li className="list-group-item">
              //<input type="checkbox" name={item.id} key={item.id} />
              //<label htmlFor={item.id}>{item.text}</label>
            //</li>
          ))}
          <li className="list-group-item is-disabled" aria-disabled="true">
            <input type="checkbox" name="name2" id="" />
            <label htmlFor="name2">(lo que venga del input de arriba)</label>
          </li>
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
          <span className="text-tag">Clear Completed</span>
        </footer>
      </>
    );
  }
}
export default TodoList;
