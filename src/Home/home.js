import React, { Component } from "react";
import { BrowserRouter as Router,
          Switch,
          Route,
          Link,
          NavLink,
 } from "react-router-dom";

import Input from "../Components/Input";
import TodoList from "../Components/TodoList"
import Footer from "../Components/Footer"

import "./home.scss";
import TodoListCompleted from "../Components/TodoList/TodoList_Completed";
import TodoListActive from "../Components/TodoList/TodoList_Active";




class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            listToDos: [],
            newToDo:""
        };
        this.updateInput = this.updateInput.bind(this);
        this.addItem = this.addItem.bind(this);
        
    }
    updateInput(key, value) {
        this.setState({ [key]: value });
      } 

    addItem(value) {
        const newToDo = {
        id: Math.random(),
        value:value
        }
        const listToDos = [...this.state.listToDos];
        listToDos.push(newToDo);
        this.setState({
        listToDos,
        newToDo: "",
        });
    }; 
  render(){
    return (
      <Router>
      <main className="container mt-5">
        <div className="container-lg">
          <h1 className="title">TO DO</h1>
        </div>
          <section className="row container-lg input__todo">
            <Input handelSubmit={this.addItem}/>
          </section>
          <section className="row container-lg">
            <Switch>
              <Route path="/" exact>
                <TodoList id="all" items={this.state.listToDos} />
              </Route>
              <Route path="/active" exact>
                <TodoListActive items={this.state.listToDos} />
              </Route>
              <Route path="/completed" exact>
                <TodoListCompleted items={this.state.listToDos} />
              </Route>
            </Switch>
            <Footer />
          </section>
        </main>
        </Router>
      );
    }
  }

  export default Home
  