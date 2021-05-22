import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

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
    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <div className="mainBackground allWidth minHeight gridBody">
          <BgPicture />
          <main className="gridMain">
            <AppHeader />
            <section className="whiteBg roundedCorner shadow margBot">
              <NewTodoCard />
            </section>
            <div className="shadow roundedCorner">
              <section className="whiteBg">
                <TodoCard />
                <TodoCard />
                <TodoCard />
                <TodoCard />
                <TodoCard />
                <TodoCard />
              </section>
              <CardFooter />
            </div>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default Home;
