import React, {Component} from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import All from "./pages/All";
import "./App.scss";

const LOCAL_STORAGE_KEY = "reactjs-todo-list";

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

      this.state ={
        isEmpty: true,
        allIsShowing: true,
        activeIsShowing: false,
        completedIsShowing: false,
        displayList: [],
        allTodos: [],
        completedTodos: [],
        activeTodos: [],
        activePath: "/",
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleTodoComplete = this.handleTodoComplete.bind(this);
      this.handleRemove = this.handleRemove.bind(this);
      this.getTaskList = this.getTaskList.bind(this);
      this.handleChangeEdit = this.handleChangeEdit.bind(this);
      this.handleSubmitEdit = this.handleSubmitEdit.bind(this);
    }

    componentDidMount(){
      const prevItems = loadLocalStorageData()
      
      if (prevItems) {
        console.log(prevItems)
        this.setState({allTodos: prevItems.allTodos, isEmpty: false})
      }
      else {this.setState({ isEmpty: true})}
    }

    //recorrer alltodos y 

    componentDidUpdate(){
      const {allTodos} = this.state;
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({ allTodos }));
    }

    handleSubmit(todoName) {
      this.handleAddTodo(todoName);
    }

    handleAddTodo(todoName) {
      const newToDo = {
        id : uuidv4(),
        name: todoName,
        complete: false,
        isEditing: false
      };     

      this.setState({
        allTodos: [...this.state.allTodos, newToDo,], isEmpty: false,
        activeTodos: [...this.state.activeTodos, newToDo], isEmpty: false,
      });

      if (true) {
        this.setState({displayList: [...this.state.allTodos, newToDo],  isEmpty: false,})
      }
    }

    handleRemove(id) {
      this.setState({
          allTodos: this.state.allTodos.filter((todo) => todo.id !== id),
          activeTodos: this.state.activeTodos.filter((todo) => todo.id !== id),
          completedTodos: this.state.completedTodos.filter((todo) => todo.id !== id),
          displayList: this.state.displayList.filter((todo) => todo.id !== id)
      })
    }

    handleTodoComplete(id) {
      this.setState({
        allTodos: [...this.state.allTodos.map((todo) => {
          if (todo.id === id) todo.complete = !todo.complete
          return todo;
        })]
      });
      
      const activeFound= this.state.activeTodos.find((item) => item.id === id);
      const completedFound = this.state.completedTodos.find((item) => item.id === id);

      if (activeFound) {
        this.setState({
          completedTodos: [...this.state.completedTodos, activeFound],
          activeTodos: [...this.state.activeTodos.filter((todo) => todo.id !== id)]
        })
      }

      if (completedFound) {
        this.setState({
          activeTodos: [...this.state.activeTodos, completedFound],
          completedTodos: [...this.state.completedTodos.filter((todo) => todo.id !== id)]
        })
      }
  }

      handleChangeEdit(e, id) {
        e.preventDefault();
        const{ allTodos } = this.state
        allTodos.map((todo)=> {
          if (todo.id === id ){
          todo.name = e.target.value
          }
        })
        this.setState({
          allTodos: allTodos
        })
      }

      handleSubmitEdit(e, id) {
        e.preventDefault();
        const{ allTodos } = this.state
        allTodos.map((todo)=> {
          if (todo.id === id){
            todo.isEditing = !todo.isEditing
          }
        
        })
        this.setState({
          allTodos: allTodos
        })
      }

      handlePath(){
        this.setState({
          activePath: "",
        })
      }

      getTaskList(path) {
        if (path === "/active") {
          return this.state.activeTodos;
        } else if (path === "/completed") {
          return this.state.completedTodos;
        }
        return (this.state.allTodos)
      }

    render(){
      const isEmpty = this.state.isEmpty;
      const activeTodos = this.state.activeTodos;
      return(
            <Route
              path="/"
              render={(routeProps) => 
                {
                  const path = routeProps.location.pathname;
                  const taskList = this.getTaskList(path)
                  return (
                <All
                isEmpty={isEmpty}
                handleSubmit={this.handleSubmit}
                displayList={taskList}
                handleTodoComplete={this.handleTodoComplete}
                handleRemove={this.handleRemove}
                todoLength={activeTodos.length}
                handleChangeEdit={this.handleChangeEdit}
                handleSubmitEdit= {this.handleSubmitEdit}
                />
              )}}
            />
          );
        }
}
export default App;
