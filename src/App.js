import React, {Component} from "react";
// import { BrowserRouter, Route } from "react-router-dom";
// import NavItem from "./components/NavItems/NavItems";
import All from "./pages/All";
import "./App.scss";
import { v4 as uuidv4 } from "uuid";


class App extends Component {

    constructor(props) {
      super(props);

      this.state ={
        isEmpty: true,
        todoName: "",
        allTodos: [],
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
      e.preventDefault();
      this.handleAddTodo(this.state);
    }

    handleAddTodo({allTodos, todoName}) {
    const newToDo = {
      id : uuidv4(),
      name: todoName,
      complete: false,
    };
    console.log(newToDo);
    }
  
    handleChange(e) {
      this.setState({ todoName: e.target.value });
    }

    render(){
      const{ todoName, isEmpty} = this.state;
      return(
        <All
        handleChange={this.handleChange}
        todoName={todoName}
        />
      )
    }
}
export default App;
