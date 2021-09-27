import React, {Component} from "react";
// import { BrowserRouter, Route } from "react-router-dom";
// import NavItems from "./components/NavItems/NavItems";
import { v4 as uuidv4 } from "uuid";
import All from "./pages/All";
import "./App.scss";



class App extends Component {

    constructor(props) {
      super(props);

      this.state ={
        isEmpty: true,
        allIsShowing: true,
        activeIsShowing: false,
        completedIsShowing: false,
        displayList: [],
        allTodos: [],
        completedTodos: [],
        activeTodos: []
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleTodoComplete = this.handleTodoComplete.bind(this);
      this.handleRemove = this.handleRemove.bind(this);
      this.handleEditTodo = this.handleEditTodo.bind(this);
    }

    handleSubmit(todoName) {
      this.handleAddTodo(todoName);
      this.todoName
    }

    handleAddTodo(todoName) {
      const newToDo = {
        id : uuidv4(),
        name: todoName,
        complete: false,
      };     

      this.setState({
        allTodos: [...this.state.allTodos, newToDo,], isEmpty: false,
        activeTodos: [...this.state.activeTodos, newToDo], isEmpty: false,
      });

      if (true /*allIsShowing*/) {
        this.setState({displayList: [...this.state.allTodos, newToDo],  isEmpty: false,})
      }
    }

    handleRemove(id) {
      this.setState({
          allTodos: this.state.allTodos.filter((todo) => todo.id !== id),
          activeTodos: this.state.activeTodos.filter((todo) => todo.id !== id),
          completedTodos: this.state.completedTodos.filter((todo) => todo.id !== id),
          displayList: this.state.displayList.filter((todo) => todo.id !== id)
      })
    }

    handleTodoComplete(id) {
      this.setState({
        allTodos: [...this.state.allTodos.map((todo) => {
          if (todo.id === id) todo.complete = !todo.complete
          return todo;
        })]
      });
      
      const activeFound= this.state.activeTodos.find((item) => item.id === id);
      const completedFound = this.state.completedTodos.find((item) => item.id === id);

      if (activeFound) {
        this.setState({
          completedTodos: [...this.state.completedTodos, activeFound],
          activeTodos: [...this.state.activeTodos.filter((todo) => todo.id !== id)]
        })
      }

      if (completedFound) {
        this.setState({
          activeTodos: [...this.state.activeTodos, completedFound],
          completedTodos: [...this.state.completedTodos.filter((todo) => todo.id !== id)]
        })
      }
  }

    handleEditTodo(value, id) {
      const { allTodos } = this.state;
      const todoIndexInArray = allTodos.findIndex((todo) => todo.id === id);
      allTodos[todoIndexInArray].name = value;
      this.setState({
        allTodos,
      });
    }
  
    render(){
      const isEmpty = this.state.isEmpty;
      const displayList = this.state.displayList;
      const activeTodos = this.state.activeTodos;
      return(
        <All
        isEmpty={isEmpty}
        handleSubmit={this.handleSubmit}
        displayList={displayList}
        handleTodoComplete={this.handleTodoComplete}
        handleRemove={this.handleRemove}
        handleEditTodo={this.handleEditTodo}
        todoLength={activeTodos.length}
        />
      );
    }
}
export default App;
