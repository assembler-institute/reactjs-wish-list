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
        allTodos: [],
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleTodoComplete = this.handleTodoComplete.bind(this);
      this.handleRemove = this.handleRemove.bind(this);
    }

    handleSubmit(todoName) {
      this.handleAddTodo(todoName);
    }

    handleAddTodo(todoName) {
    const newToDo = {
      id : uuidv4(),
      name: todoName,
      complete: false,
    };
    this.setState({allTodos: [...this.state.allTodos, newToDo], isEmpty: false})
    }

    handleRemove(id) {
      this.setState({
          allTodos: this.state.allTodos.filter((todo) => todo.id !== id)
      })
    }

    handleTodoComplete(id) {
      this.setState({
        allTodos: [...this.state.allTodos.map((todo) => {
          if (todo.id === id) todo.complete = !todo.complete
          return todo;
        })]
      });
    }
  
    render(){
      const{isEmpty, allTodos} = this.state;
      return(
        <All
        isEmpty={isEmpty}
        handleSubmit={this.handleSubmit}
        allTodos={allTodos}
        handleTodoComplete={this.handleTodoComplete}
        handleRemove={this.handleRemove}
        />
      );
    }
}
export default App;
