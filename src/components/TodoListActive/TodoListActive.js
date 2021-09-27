import React, { Component } from "react";

import Todo from "../Todo/Todo";
import { Droppable } from "react-beautiful-dnd";

export default class TodoListActive extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { tasks, removeTask, completeTask, changeTitle, editTask } =
      this.props;
    const filteredArr = tasks.filter((item) => item.isFinished === false);
    return (
      <Droppable droppableId="active">
        {(droppableProvided) => (
          <ul
            {...droppableProvided.droppableProps}
            ref={droppableProvided.innerRef}
            className="item__list"
          >
            {filteredArr.map((item, index) => {
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
                  changeTitle={changeTitle}
                  editTask={editTask}
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
