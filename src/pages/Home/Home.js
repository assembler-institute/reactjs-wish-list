import React from "react";

import "./Home.scss";
import AppHeader from "../../components/AppHeader/index";
import Footer from "../../components/Footer/index";
import TodoCard from "../../components/TodoCard/index";
import NewTodoCard from "../../components/NewTodoCard/index";
import BgPicture from "../../components/BgPicture/index";
import CardFooter from "../../components/CardFooter/index";

export default function Home() {
  return (
    <body className="mainBackground allWidth minHeight gridBody">
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
            <TodoCard />
            <TodoCard />
            <TodoCard />
            <TodoCard />
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
    </body>
  );
}
