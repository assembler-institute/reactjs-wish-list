import { Component } from "react";
import TodoItem from "../TodoItem";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import "./TodoList.scss";

export default class TodoList extends Component {
  constructor(props) {
    super(props);

    this.handleDragEnd = this.handleDragEnd.bind(this);
  }

  handleDragEnd(result) {
    if (!result.source || !result.destination) return;

    const [srcIndex, dstIndex] = [result.source.index, result.destination.index];

    this.props.handleMove(srcIndex, dstIndex);
  }

  render() {
    const { pathname, todos, handleDelete, handleSetDone, handleSetText, handleIsEditing } = this.props;

    const dndEnabled = pathname === "/";

    return (
      <div className="todo-list">
        <DragDropContext onDragEnd={this.handleDragEnd}>
          <Droppable droppableId="todo-list" isDropDisabled={!dndEnabled}>
            {(provided) => (
              <ul ref={provided.innerRef} {...provided.innerRef} data-testid="todos-list">
                {todos.map((item, index) => (
                  <Draggable draggableId={item.id} key={item.id} index={index} isDragDisabled={!dndEnabled}>
                    {(provided) => (
                      <li key={item.id} data-testid="todo-item">
                        <TodoItem
                          provided={provided}
                          handleDelete={handleDelete}
                          handleSetDone={handleSetDone}
                          handleSetText={handleSetText}
                          handleIsEditing={handleIsEditing}
                          {...item}
                        />
                      </li>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    );
  }
}
