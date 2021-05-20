import React, { Component } from "react";
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
          id: 343434437676433343434,
          name: "Task 1",
          completed: false,
        },
        {
          id: 343434434333657883343434,
          name: "Task 2",
          completed: false,
        },
        {
          id: 3434344343336578888834,
          name: "Task 3",
          completed: false,
        },
        {
          id: 3434344343336578888834,
          name: "Task A3",
          completed: false,
        },
        {
          id: 3434344343336578888834,
          name: "Task 13",
          completed: false,
        },
      ],
    };
  }

  getTasks() {
    const { tasks } = this.state;
    return tasks;
  }

  render() {
    const { tasks } = this.state;

    return (
      <Main>
        <Section>
          <AppHeader />
          <InputTask />
          <List tasks={tasks} />
        </Section>
      </Main>
    );
  }
}

export default App;
