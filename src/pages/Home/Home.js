import React, { Component } from "react";

import "./Home.scss";
import AppHeader from "../../components/AppHeader/index";
import Footer from "../../components/Footer/index";
import TodoCard from "../../components/TodoCard/index";
import NewTodoCard from "../../components/NewTodoCard/index";
import BgPicture from "../../components/BgPicture/index";
import CardFooter from "../../components/CardFooter/index";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: [],
    };
    this.newToDo = this.newToDo.bind(this);
    this.selectedTodoToDelete = this.selectedTodoToDelete.bind(this);
  }

  newToDo(toDo) {
    const { toDoList } = this.state;

    this.setState({
      toDoList: [toDo, ...toDoList],
    });

    // console.log(toDo);
  }

  selectedTodoToDelete(id) {
    const { toDoList } = this.state;

    const filteredToDoList = toDoList.filter((e, index) => index !== id);
    this.setState({
      toDoList: filteredToDoList,
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
                  key={e}
                  selectedTodoToDelete={this.selectedTodoToDelete}
                  id={index}
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
