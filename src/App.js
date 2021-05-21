import React, { Component } from "react";
import { Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { Formik } from "formik";

import TodoList from "./components/TodoList";
import Checkbox from "./components/Checkbox";
import Input from "./components/Input";

import hero from "./img/hero.jpg";
import { HOME, ACTIVE, COMPLETED } from "./constatnts/routes";
import productSchema from "./todo-schema";
import * as api from "./api";

import "./header.scss";

const LOCAL_STORAGE_KEY = "todo-state";

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
      todos: [],
      todoName: "",
      editTodoName: "",
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleChangeCheck = this.handleChangeCheck.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleChangeTodo = this.handleChangeTodo.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
  }

  componentDidMount() {
    const prevItems = loadLocalStorageData();

    if (!prevItems) {
      api.getProducts().then((data) => {
        this.setState({ todos: data });
      });
      return;
    }

    this.setState({ todos: prevItems.todos });
  }

  componentDidUpdate() {
    const { todos } = this.state;
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({ todos }));
  }

  handleAddTodo(values) {
    const { todos } = this.state;

    const newTodo = {
      id: uuidv4(),
      name: values.name,
      complete: false,
    };

    this.setState({ todos: [...todos, newTodo], todoName: "" });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.handleAddTodo(this.state);
  }

  handleChange(e) {
    this.setState({ todoName: e.target.value });
  }

  handleRemove(id) {
    const { todos } = this.state;
    const arr = todos.filter((todo) => todo.id !== id);
    this.setState({ todos: arr });
  }

  handleChangeCheck(id) {
    const { todos } = this.state;
    const arr = todos.map((todo) => {
      const obj = todo.id === id ? { ...todo, complete: !todo.complete } : todo;
      return obj;
    });

    this.setState({ todos: arr });
  }

  handleEdit(id) {
    const { todos } = this.state;
    const todoToEdit = todos.map((todo) => {
      return todo.id === id ? { ...todo, edit: true } : todo;
    });
    this.setState({ todos: todoToEdit });
  }

  handleChangeTodo(e) {
    // const { todos } = this.state;
    this.setState({ editTodoName: e.target.value });
    // const todoToEdit = todos.map((todo) => {
    //   return todo.id === id ? { ...todo, name: e.target.value } : todo;
    // });
    // this.setState({ todos: todoToEdit });
  }

  handleEditSubmit(e, id) {
    const { todos, editTodoName } = this.state;
    const todoToEdit = todos.map((todo) => {
      return todo.id === id
        ? { ...todo, name: editTodoName, edit: false }
        : todo;
    });
    this.setState({ todos: todoToEdit });
  }

  render() {
    const { todos, editTodoName } = this.state;
    return (
      <>
        <header>
          <div className="heroImg" alt="hero" src={hero}>
            <h1 className="TODO__Header">TODO</h1>

            <Formik
              initialValues={{
                name: "",
              }}
              validationSchema={productSchema}
              onSubmit={(values, { resetForm }) => {
                this.handleAddTodo(values);
                resetForm();
              }}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                errors,
                values,
                touched,
              }) => (
                <form className="TODO__Form" onSubmit={handleSubmit}>
                  <Checkbox handleChange={() => {}} />
                  <Input
                    type="text"
                    placeholder="Create task"
                    id="name"
                    value={values.name}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    hasErrorMessage={touched.name}
                    errorMessage={errors.name}
                  />
                </form>
              )}
            </Formik>
          </div>
        </header>

        <Route
          path={ACTIVE}
          exact
          render={(routeProps) => (
            <TodoList
              {...routeProps}
              handleChangeCheck={this.handleChangeCheck}
              handleRemove={this.handleRemove}
              todos={todos.filter((todo) => !todo.complete)}
            />
          )}
        />

        <Route
          path={COMPLETED}
          exact
          render={(routeProps) => (
            <TodoList
              {...routeProps}
              handleChangeCheck={this.handleChangeCheck}
              handleRemove={this.handleRemove}
              todos={todos.filter((todo) => todo.complete)}
            />
          )}
        />

        <Route
          path={HOME}
          exact
          render={(routeProps) => (
            <TodoList
              {...routeProps}
              handleChangeCheck={this.handleChangeCheck}
              handleRemove={this.handleRemove}
              handleEdit={this.handleEdit}
              handleChangeTodo={this.handleChangeTodo}
              handleEditSubmit={this.handleEditSubmit}
              editTodoName={editTodoName}
              todos={todos}
            />
          )}
        />
      </>
    );
  }
}

export default App;
