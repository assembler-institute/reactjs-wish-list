import React, { Component } from "react";

import "./Home.scss";
import AppHeader from "../../components/AppHeader/index";
import Footer from "../../components/Footer/index";
import TodoCard from "../../components/TodoCard/index";
import NewTodoCard from "../../components/NewTodoCard/index";
import BgPicture from "../../components/BgPicture/index";
import CardFooter from "../../components/CardFooter/index";
// import UseLocalStorage from "../../components/UseLocalStorage/index";

const LOCAL_STORAGE_KEY = "toDoListSaved";

function loadLocalStorageData() {
  const prevToDos = localStorage.getItem(LOCAL_STORAGE_KEY);

  if (!prevToDos) {
    return null;
  }

  try {
    return JSON.parse(prevToDos);
  } catch (error) {
    return null;
  }
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: [],
    };
    this.newToDo = this.newToDo.bind(this);
    this.selectedToDoToDelete = this.selectedToDoToDelete.bind(this);
    this.updateToDo = this.updateToDo.bind(this);
    // this.setLocalStorage = this.setLocalStorage.bind(this);
    // this.getLocalStorage = this.getLocalStorage.bind(this);
  }

  componentDidMount() {
    const prevToDos = loadLocalStorageData();

    if (prevToDos) {
      this.setState({
        toDoList: prevToDos,
      });
    } else {
      this.setState({
        toDoList: [],
      });
    }
  }

  componentDidUpdate() {
    const { toDoList } = this.state;

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(toDoList));
  }

  newToDo(toDo) {
    const { toDoList } = this.state;

    this.setState({
      toDoList: [toDo, ...toDoList],
    });
  }

  selectedToDoToDelete(id) {
    const { toDoList } = this.state;

    const filteredToDoList = toDoList.filter((e, index) => index !== id);
    this.setState({
      toDoList: filteredToDoList,
    });
  }

  updateToDo(id, toDo) {
    const { toDoList } = this.state;

    const updatedList = toDoList.map((e, index) => {
      if (index === id) {
        // eslint-disable-next-line no-param-reassign
        e = toDo;
      }
      return e;
    });
    this.setState({
      toDoList: updatedList,
    });
  }

  render() {
    const { toDoList } = this.state;

    return (
      <div className="mainBackground allWidth minHeight gridBody">
        <BgPicture />
        <main className="gridMain">
          <AppHeader />
          <section className="whiteBg roundedCorner shadow margBot">
            <NewTodoCard newToDo={this.newToDo} />
          </section>
          <div className="shadow roundedCorner">
            <section className="whiteBg">
              {toDoList.map((e, index) => (
                <TodoCard
                  toDo={e}
                  // eslint-disable-next-line react/no-array-index-key
                  key={`${e}-${index}`}
                  id={index}
                  selectedToDoToDelete={this.selectedToDoToDelete}
                  updateToDo={this.updateToDo}
                />
              ))}
            </section>
            <CardFooter />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Home;
