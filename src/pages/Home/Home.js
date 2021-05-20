import React from "react";

import "./Home.scss";
import AppHeader from "../../components/AppHeader/index";
import Footer from "../../components/Footer/index";
import TodosList from "../../components/TodosList/index";
import NewTodoCard from "../../components/NewTodoCard/index";
import BgPicture from "../../components/BgPicture/index";

export default function Home({ todos, handleCompleted, saveNewTodo }) {
  return (
    <div className="mainBackground allWidth minHeight gridBody">
      <BgPicture />
      <main className="gridMain">
        <AppHeader />
        <section className="whiteBg roundedCorner shadow margBot">
          <NewTodoCard saveNewTodo={saveNewTodo} />
        </section>
        <TodosList todos={todos} handleCompleted={handleCompleted} />
      </main>
      <Footer />
    </div>
  );
}
