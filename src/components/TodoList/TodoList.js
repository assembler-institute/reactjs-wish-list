import { Component } from "react";
import TodoItem from "../TodoItem";
import NoTodoPreview from "../NoTodoPreview";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import "./TodoList.scss";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { dndEnabled, todos, handleMove, handleDelete, handleSetDone, handleSetText, handleIsEditing } = this.props;

    return (
      <div className="todo-list">
        {todos.length > 0 ? (
          <DragDropContext onDragEnd={(result) => handleMove(result.source.index, result.destination.index)}>
            <Droppable droppableId="todo-list" isDropDisabled={!dndEnabled}>
              {(provided) => (
                <ul ref={provided.innerRef} {...provided.innerRef}>
                  {todos.map((item, index) => (
                    <Draggable draggableId={item.id} key={item.id} index={index} isDragDisabled={!dndEnabled}>
                      {(provided) => (
                        <li key={item.id}>
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
        ) : (
          <NoTodoPreview />
        )}
      </div>
    );
  }
}
