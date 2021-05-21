import React, { Component } from "react";
import { v4 as uuid } from "uuid";
import $ from "jquery";
// import { BrowserRouter, Route } from "react-router-dom";
import Main from "./components/Main";
import Section from "./components/Section";
import AppHeader from "./components/AppHeader";
import InputTask from "./components/InputTask";
import List from "./components/List";

const LOCAL_STORAGE_KEY = "tasks";

function loadLocalStorageData() {
  const prevItems = localStorage.getItem(LOCAL_STORAGE_KEY);

  if (!prevItems) {
    return null;
  }

  try {
    return JSON.parse(prevItems);
  } catch (error) {
    return null;
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    const prevItems = loadLocalStorageData();
    if (prevItems && prevItems.tasks) {
      this.setState({
        tasks: prevItems.tasks,
      });
    }
  }

  componentDidUpdate() {
    const { tasks } = this.state;
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({ tasks }));
  }

  handleKeyDown(event) {
    if (
      event.target.value &&
      !/^\s*$/.test(event.target.value) &&
      event.key === "Enter"
    ) {
      this.setState(
        (prevState) => ({
          tasks: [
            { id: uuid(), name: event.target.value, completed: false },
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
        </Section>
      </Main>
    );
  }
}

export default App;
