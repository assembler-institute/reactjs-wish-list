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

    const { pageDesc } = this.props;
    this.location = location;

    this.pageDesc = pageDesc;

    this.state = {
      tasks: [],
    };

    // cuando cambie el local storage cambiar el state del componente y volver a rederizar

    // cuando monte: ahi lee el local storage

    // si alguien aprieta un boton de demo de clear o etc, volver a cambiar el stado del componente

    // o cunado alguien agregue un nuevo input
  }

  componentDidMount() {
    const { tasks } = this.props;

    if (tasks) {
      // eslint-disable-next-line
      console.log("tasks of props", tasks.length);

      this.setState({
        tasks: tasks,
      });
    }
  }

  componentDidUpdate() {
    // eslint-disable-next-line
    console.log("I updated");
  }

  render() {
    const { tasks } = this.state;
    const { quant } = tasks.length;

    return (
      <div className="main-list p-4">
        <p>Currently Seeing: {this.pageDesc} </p>
        <ul
          id={`task-list${this.location.pathname}`}
          key={`key_${this.location}`}
          className="list-unstyled"
        >
          {tasks &&
            tasks.map((todos) => {
              return (
                <Task
                  id={`id_${todos.id}`}
                  key={todos.name}
                  tasks={todos}
                  {...todos}
                />
              );
            })}
          {!tasks && <Ilustration />}
        </ul>
        <CounterToDo {...quant} />
      </div>
    );
  }
}
