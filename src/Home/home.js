import React, { Component } from "react";

import Input from "../Components/Input";
import TodoList from "../Components/TodoList"
import Footer from "../Components/Footer"

import "./home.scss";




class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            listToDos: [],
        };
        this.updateInput = this.updateInput.bind(this);
        this.addItem = this.addItem.bind(this);
        this.ChangeItem=this.ChangeItem.bind(this)
        
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
          <h1 className="title">TO DO</h1>
        </div>
          <section className="row container-lg input__todo">
            <Input handelSubmit={this.addItem}/>
          </section>
          <section className="row container-lg">
            <TodoList items={this.state.listToDos} />
            <Footer />
          </section>
        </main>
      );
    }
  }

  export default Home
  