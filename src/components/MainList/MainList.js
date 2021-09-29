import React, { Component } from "react";

import Task from "../Task";
import CounterToDo from "../CounterToDo";
import Ilustration from "../Ilustration";

// renders the list with the todos
// its a ul component
// depends of wich page is it this.props.done
// if this.props.isEditing its true .. displays a input to edit the input that was displayed

// if list its empty renders a image

// Recieves the list from the App, only the texts

// eslint-disable-next-line react/prefer-stateless-function
export default class MainList extends Component {
  constructor(props) {
    super(props);
    const { location } = this.props;

    const { tasks } = this.props;
    this.tasks = tasks;
    // eslint-disable-next-line
    console.log("tak in manilist is ", this.tasks);

    const { pageDesc } = this.props;
    this.location = location;

    this.pageDesc = pageDesc;

    if (tasks) {
      this.todoQuantity = Object.values(tasks).length;
    } else {
      this.todoQuantity = 0;
    }

    const { getTaskList } = this.props;
    this.getTaskList = getTaskList;

    // cuando cambie el local storage cambiar el state del componente y volver a rederizar

    // cuando monte: ahi lee el local storage

    // si alguien aprieta un boton de demo de clear o etc, volver a cambiar el stado del componente

    // o cunado alguien agregue un nuevo input
  }

  componentDidMount() {
    this.getTaskList();
  }

  render() {
    return (
      <div className="main-list p-4">
        <p>Currently Seeing: {this.pageDesc} </p>
        <ul
          id={`task-list${this.location.pathname}`}
          key={`key_${this.location}`}
          className="list-unstyled"
          {...this.tasks}
        >
          {this.tasks &&
            this.tasks.map((todos) => {
              // eslint-disable-next-line
              console.log("todos.name is ", todos.name);
              return (
                <Task
                  {...this.props}
                  id={`id_${todos.id}`}
                  key={todos.name}
                  tasks={todos}
                  handleSubmit={this.handleSubmit}
                  getTaskList={this.getTaskList}
                />
              );
            })}
          {!this.tasks && <Ilustration />}
        </ul>
        <CounterToDo quantity={this.todoQuantity} />
      </div>
    );
  }
}
