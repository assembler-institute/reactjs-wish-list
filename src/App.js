import React, { Component } from "react";
// import { BrowserRouter, Route } from "react-router-dom";
import Main from "./components/Main";
import Section from "./components/Section";
import AppHeader from "./components/AppHeader";
import InputTask from "./components/InputTask";
import List from "./components/List";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: ["111", "222"],
    };
  }

  getTasks() {
    const { tasks } = this.state;
    return tasks;
  }

  render() {
    return (
      <Main>
        <Section>
          <AppHeader />
          <InputTask />
          <List />
        </Section>
      </Main>
    );
  }
}

export default App;
