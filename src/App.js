import React, { Component } from "react";
import { v4 as uuid } from "uuid";
import $ from "jquery";
// import { BrowserRouter, Route } from "react-router-dom";
import Main from "./components/Main";
import Section from "./components/Section";
import AppHeader from "./components/AppHeader";
import InputTask from "./components/InputTask";
import List from "./components/List";

// const LOCAL_STORAGE_KEY = "tasks";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          id: 1,
          name: "Task 1",
          completed: false,
        },
        {
          id: 2,
          name: "Task 2",
          completed: false,
        },
        {
          id: 3,
          name: "Task 3",
          completed: false,
        },
        {
          id: 4,
          name: "Task A3",
          completed: false,
        },
        {
          id: 5,
          name: "Task 13",
          completed: false,
        },
      ],
    };
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  // eslint-disable-next-line react/sort-comp
  getTasks() {
    const { tasks } = this.state;
    return tasks;
  }

  handleKeyDown(event) {
    if (event.key === "Enter") {
      this.setState(
        (prevState) => ({
          tasks: [
            { id: uuid(), name: event.target.value, completed: 0 },
            ...prevState.tasks,
          ],
        }),
        () => {
          $(event.target).val("");
        },
      );
    }
  }

  render() {
    const { tasks } = this.state;

    return (
      <Main>
        <Section>
          <AppHeader />
          <InputTask handleKeyDown={this.handleKeyDown} />
          <List tasks={tasks} />
          <List />
        </Section>
      </Main>
    );
  }
}

export default App;
