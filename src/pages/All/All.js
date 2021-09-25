// import { props } from "bluebird";
import React from "react";

import Main from "../../components/Main";
import bgImg from "../../img/sunset-mountain.jpg";
import MainHeader from "../../components/MainHeader";
import ToDo from "../../components/ToDo/ToDo";
import NotToDo from "../../components/NotToDo";
import TaskIndicator from "../../components/TaskIndicator";
import ToDoList from "../../components/ToDoList";


function All({
  handleSubmit,
  handleChange,
  handleTodoComplete,
  handleRemove,
  todoName,
  isEmpty,
  todoLength,
  allTodos,
  ...props
  
})

{
  return (
    <Main {...props}>
      <div className="fullcontent">
        <div className="container-fluid, h40">
          <div className="gradient" />
          <img src={bgImg} alt="Mountain background" />
        </div>
        <div className="container-fluid h60 bg-light" />
      </div>
      <section className="container-sm position-absolute d-flex flex-column p-0 mainContent">
        <MainHeader />
        <aside className="bg-light d-flex flex-row shadow rounded p-3 mb-4">
          <ToDo
            allTodos={allTodos}
            handleSubmit={handleSubmit}
            todoName={todoName}
          />
        </aside>
        <article className="bg-light d-flex flex-column shadow rounded toContent">
        <div className="todoRender">
            {isEmpty && <NotToDo/>}
            {!isEmpty &&
            <ToDoList handleTodoComplete={handleTodoComplete} handleRemove={handleRemove} allTodos={allTodos}/>
            }
          </div>
        <TaskIndicator todoLength={todoLength}/>
        </article>
        </section>
      </Main>
  );
}
export default All;