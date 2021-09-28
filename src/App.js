import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/Header";
import MainList from "./components/MainList";
import Footer from "./components/Footer";

import {
  startDemo,
  getLocalStorageObject,
  handleSubmit,
  appKeys,
  clearCompleted,
} from "./utils/demo";

//* the App needs to know all the todo to pass it to
//* the Footer for the COUNTER and to the MainList for Render them

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      counter: 0,
    };

    function getTaskList() {
      console.log("seteando estado...");
      if (getLocalStorageObject("task-todos")) {
        const { tasks } = getLocalStorageObject("task-todos");
        tasks
          ? this.setState({ tasks: tasks, counter: tasks.lenght })
          : this.setState({ tasks: [], counter: 0 });
      }
    }

    this.getTaskList = getTaskList.bind(this);
  }

  componentDidMount() {
    this.getTaskList();
  }

  render() {
    const { tasks, counter } = this.state;
    return (
      <div className="app-container">
        <Header handleSubmit={handleSubmit} />
        <BrowserRouter {...appKeys}>
          {appKeys().map((appKey) => (
            <Route
              key={appKey.id}
              exact
              path={appKey.path}
              render={(routeProps) => (
                <>
                  <MainList
                    {...routeProps}
                    tasks={tasks.filter((obj) => {
                      return appKey.list === "todos"
                        ? obj
                        : obj.list === appKey.list;
                    })}
                    getTaskList={this.getTaskList}
                    counter={counter}
                    pageDesc={appKey.pageDescr}
                  />
                </>
              )}
            />
          ))}
          <Footer
            appKeys={appKeys}
            startDemo={startDemo}
            clearCompleted={clearCompleted}
            getTaskList={this.getTaskList}
          />
        </BrowserRouter>
      </div>
    );
  }
}
