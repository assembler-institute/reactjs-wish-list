import React, { Component } from "react";

import Input from "../Components/Input";
import TodoList from "../Components/TodoList"

import "./home.scss";




class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            listToDos: [],
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
      <main className="container mt-5">
        <div className="container-lg">
          <h1>TO DO</h1>
        </div>
          <section className="row container-lg input__todo">
            <Input handelSubmit={this.addItem}/>
          </section>
          <section className="row container-lg">
            <TodoList items={this.state.listToDos} />
            <div className="footer">
              <div className="row counter__container">
                <span>1</span><p>Tasks Left</p>
              </div>
              <div className="btn__group">
                <button type="button" className="btn">All</button>
                <button type="button" className="btn">Active</button>
                <button type="button" className="btn">Completed</button>
              </div>
              <button type="button" className="btn btn__clr">Clear Completed</button>
            </div>
          </section>
        </main>
      );
    }
  }

  export default Home
  