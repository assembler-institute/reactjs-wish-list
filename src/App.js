import React, {Component} from "react";
// import { BrowserRouter, Route } from "react-router-dom";
// import NavItem from "./components/NavItems/NavItems";
import All from "./pages/All";
import "./App.scss";


class App extends Component {

    constructor(props) {
      super(props);

      this.state ={
        isEmpty: true,
        todoName: "",
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
      e.preventDefault();
      this.handleAddTodo(this.state);
    }
  
    handleChange(e) {
      this.setState({ todoName: e.target.value });
    }

    render(){
      const{ todoName, isEmpty} = this.state;
      return(
        <All/>
      )
    }
}
export default App;
