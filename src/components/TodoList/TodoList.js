import { Component } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { TodoListStyled } from "./TodoList.styled.js";
import TodoItem from "../TodoItem";

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
    const { dndDisabled, todos, handleDelete, handleSetDone, handleSetText, handleIsEditing } = this.props;
    
    return (
      <TodoListStyled>
        <DragDropContext onDragEnd={this.handleDragEnd}>
          <Droppable droppableId="todo-list" isDropDisabled={dndDisabled}>
            {(provided) => (
              <ul ref={provided.innerRef} {...provided.innerRef} data-testid="todos-list">
                {todos.map((item, index) => (
                  <Draggable draggableId={item.id} key={item.id} index={index} isDragDisabled={dndDisabled}>
                    {(provided) => (
                      <li key={item.id} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} data-testid="todo-item">
                        <TodoItem
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
      </TodoListStyled>
    );
  }
}
