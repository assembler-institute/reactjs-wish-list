import { React, Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import dark from "./img/dark.png"
import light from "./img/light.png"
import {$color1} from "./scss/abstracts/colors.scss"
//import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import ListItems from "./ListItems";
import Completed from "./Completed";
import Active from "./Active";
import ItemsLeft from "./ItemsLeft";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        id: "",
        content: "",
        completed: false,
      },
    };
    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleCompleted = this.handleCompleted.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleClearCompleted = this.handleClearCompleted.bind(this);
    this.handleMarkAllAsCompleted = this.handleMarkAllAsCompleted.bind(this);
  }

  componentDidMount() {
    const json = localStorage.getItem("todos");
    if (json) {
      const data = JSON.parse(json);
      this.setState({
        items: data,
      });
    }
  }

  componentDidUpdate() {
    localStorage.setItem("todos", JSON.stringify(this.state.items));
  }

  handleInput(e) {
    this.setState({
      currentItem: {
        id: new Date().getTime(),
        content: e.target.value,
        completed: false,
      },
    });
  }

  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.content !== "") {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          id: "",
          content: "",
          completed: false,
        },
      });
    }
  }

  handleDelete(id) {
    const updateToDos = this.state.items.filter((item) => item.id !== id);
    this.setState({
      items: updateToDos,
    });
  }

  handleEdit(content, id) {
    const updateToDos = this.state.items.map((item) => {
      if (item.id === id) {
        item.content = content;
      }
      return item;
    });
    this.setState({
      items: updateToDos,
    });
  }

  handleMarkAllAsCompleted() {
    const updateToDos = this.state.items.map((item) => (item.completed = true));
    this.setState({
      completed: updateToDos,
    });
  }

  handleCompleted(id) {
    const updateToDos = this.state.items.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });
    this.setState({
      items: updateToDos,
    });
  }

  handleClearCompleted() {
    const updateToDos = this.state.items.filter(
      (item) => item.completed === false,
    );
    this.setState({
      items: updateToDos,
    });
  }

habdleTheme (){
  if ($color1 = ED7053){
  alert("ieh")
  }
}

  render() {
    return (
      <div class="container">
        <header>
          <img class="switch" src={light} alt="switch mode" onClick={this.handleTheme} />
          <h1>ToDo List</h1>
          <p>Organize your steps to find the correct way</p>
          <form onSubmit={this.addItem}>
            <input
              type="text"
              name="todo"
              value={this.state.currentItem.content}
              placeholder="Press enter to add a new ToDo."
              onChange={this.handleInput}
            />
            <button hidden type="submit" />
          </form>
        </header>
        <Router>
          <div>
            <Switch>
              <Route path="/active">
                <Active items={this.state.items} />
              </Route>
              <Route path="/completed">
                <Completed items={this.state.items} />
              </Route>
              <Route path="/">
                <ListItems
                  items={this.state.items}
                  handleDelete={this.handleDelete}
                  handleEdit={this.handleEdit}
                  handleCompleted={this.handleCompleted}
                />
              </Route>
            </Switch>
            <nav>
              <div class="left">
                <span>
                  <strong>Items left:</strong>
                </span>
                <ItemsLeft items={this.state.items} />
              </div>
              <div class="functions">
                <ul>
                  <li>
                    <Link to="/">All</Link>
                  </li>
                  <li>
                    <Link to="/active">Active</Link>
                  </li>
                  <li>
                    <Link to="/completed">Completed</Link>
                  </li>
                </ul>
              </div>
              <div class="buttons">
              <button onClick={this.handleClearCompleted}>
                Clear Completed
              </button>
              <button onClick={this.handleMarkAllAsCompleted}>Mark all</button>
              </div>
            </nav>
          </div>
        </Router>
      </div>
    );
  }
}
