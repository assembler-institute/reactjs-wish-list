import React, { Component } from "react";

import Input from "../Components/Input";
import TodoList from "../Components/TodoList"
import Footer from "../Components/Footer"

import "./home.scss";



class Home extends Component {
  render(){
    return (
      <main className="container mt-5">
        <div className="container-lg">
          <h1 className="title">TO DO</h1>
        </div>
          <section className="row container-lg input__todo">
            <Input />
          </section>
          <section className="row container-lg">
            <TodoList />
            <Footer />
          </section>
        </main>
      );
    }
  }

  export default Home
  