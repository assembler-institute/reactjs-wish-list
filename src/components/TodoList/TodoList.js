import React, { Component } from "react";
import "./TodoList.scss";

import Todo from "../Todo/Todo";
import { Droppable } from "react-beautiful-dnd";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { tasks, removeTask, completeTask, editTask, changeTitle } =
      this.props;
    return (
      <Droppable droppableId="home">
        {(droppableProvided) => (
          <ul
            {...droppableProvided.droppableProps}
            ref={droppableProvided.innerRef}
            className="item__list"
          >
            {tasks.map((item, index) => {
              return (
                <Todo
                  index={index}
                  key={item.id}
                  title={item.title}
                  id={item.id}
                  isFinished={item.isFinished}
                  isEditing={item.isEditing}
                  removeTask={removeTask}
                  completeTask={completeTask}
                  editTask={editTask}
                  changeTitle={changeTitle}
                />
              );
            })}
            {droppableProvided.placeholder}
          </ul>
        )}
      </Droppable>
    );
  }
}
