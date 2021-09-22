import { Component } from "react";
import { DragDropContext } from "react-beautiful-dnd";

import { TasksList, Footer, NewTaskForm } from "./components";

import * as api from "./api";

const LOCAL_STORAGE_KEY = "reactjs-todo-list";

Array.prototype.move = function (from, to) {
  this.splice(to, 0, this.splice(from, 1)[0]);
};

function loadLocalStorageData() {
  const prevItems = localStorage.getItem(LOCAL_STORAGE_KEY);

  if (!prevItems) return null;

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
      status: "active",
      tasks: [],
      filteredTasks: [],
    };
  }

  componentDidMount() {
    const prevItems = loadLocalStorageData();

    if (!prevItems) {
      this.setState({
        isLoading: true,
      });

      api.getTasks().then((data) => {
        this.setState({
          status: "all",
          tasks: data,
          filteredTasks: data,
          isLoading: false,
        });
      });

      return;
    }

    this.setState({
      status: "all",
      tasks: prevItems.tasks,
      filteredTasks: prevItems.tasks,
    });
  }

  onKeyDownSubmit = (e, handleSubmit) => {
    if (e.key === "Enter") {
      e.preventDefault();

      e.target.blur();

      handleSubmit();
    }
  };

  onKeyDownEdit = (e, taskId) => {
    if (e.key === "Enter") {
      e.preventDefault();

      this.toggleEditTask(e, taskId);
      this.saveEditTask(e, taskId);
    }
  };

  saveNewTask = (newTask) => {
    this.setState((prevState) => ({
      ...prevState,
      tasks: [newTask, ...prevState.tasks],
      filteredTasks: [newTask, ...prevState.filteredTasks],
    }));
  };

  saveEditTask = (e, taskId) => {
    e.preventDefault();

    const { tasks } = this.state;

    tasks.map((task) => {
      if (task.id === taskId) {
        task.text = e.target.value;
        task.updatedAt = new Date().toISOString();
      }
    });

    this.setState((prevState) => ({
      ...prevState,
      tasks: tasks,
    }));
  };

  toggleDoneTask = (e, taskId) => {
    e.preventDefault();

    const { tasks } = this.state;

    tasks.map((task) => {
      task.id === taskId ? (task.done = !task.done) : null;
    });

    this.setState((prevState) => ({
      ...prevState,
      tasks: tasks,
    }));
  };

  toggleEditTask = (e, taskId) => {
    e.preventDefault();

    const { tasks } = this.state;

    tasks.map((task) => {
      task.id === taskId ? (task.isEditing = !task.isEditing) : null;
    });

    this.setState((prevState) => ({
      ...prevState,
      tasks: tasks,
    }));
  };

  removeTask = (e, taskId) => {
    e.preventDefault();

    const { tasks } = this.state;

    const newTasks = tasks.filter((task) => task.id !== taskId);

    this.setState((prevState) => ({
      ...prevState,
      tasks: newTasks,
      filteredTasks: newTasks,
    }));
  };

  removeAllCompletedTasks = (e) => {
    e.preventDefault();

    const { tasks } = this.state;

    const newTasks = tasks.filter((task) => task.done !== true);

    this.setState((prevState) => ({
      ...prevState,
      tasks: newTasks,
      filteredTasks: newTasks,
    }));
  };

  filterTasks = (status) => {
    const { tasks } = this.state;

    let filteredTasks;

    status === "all" ? (filteredTasks = tasks) : null;
    status === "active"
      ? (filteredTasks = tasks.filter((task) => task.done === false))
      : null;
    status === "complete"
      ? (filteredTasks = tasks.filter((task) => task.done === true))
      : null;

    this.setState((prevState) => ({
      ...prevState,
      filteredTasks: filteredTasks,
      status: status,
    }));
  };

  render() {
    const { filteredTasks } = this.state;

    return (
      <main className="container mt-5">
        <section className="row">
          <DragDropContext
            onDragEnd={(result) => {
              /* const { tasks } = this.state;
              const { source, destination } = result;
              if (!destination) return;
              if (source.index === destination.index) return;
              tasks.move(source.index, destination.index); */
    
            }}
          >
            <div className="col-md-6 offset-md-3">
              <h1>Hello Taskmaker</h1>

              <NewTaskForm
                saveNewTask={this.saveNewTask}
                onKeyDownSubmit={this.onKeyDownSubmit}
              />

              <TasksList
                filteredTasks={filteredTasks}
                toggleEditTask={this.toggleEditTask}
                saveEditTask={this.saveEditTask}
                onKeyDownEdit={this.onKeyDownEdit}
                toggleDoneTask={this.toggleDoneTask}
                removeTask={this.removeTask}
              />

              <Footer
                filterTasks={this.filterTasks}
                filteredTasks={filteredTasks}
                removeAllCompletedTasks={this.removeAllCompletedTasks}
              />
            </div>
          </DragDropContext>
        </section>
      </main>
    );
  }
}

export default App;
