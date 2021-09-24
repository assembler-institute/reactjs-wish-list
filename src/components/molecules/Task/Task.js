import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

import { Button, InputEdit } from "../../atoms";

const CheckDone = styled.button`
  width: 23px;
  margin-right: 1rem;
  border-radius: 23px;
`;

const ButtonDelete = styled.button`
  color: grey;
  background-color: #ffffff;
  border: 0;
  font-weight: bold;
  &:hover {
    color: #000000;
    background-color: #ffffff;
  }
`;

const TaskItem = styled.li`
  display: flex;
  flex-direction: row;
  min-height: 1px;
  padding: 1.25rem;
  margin-top: 0.5rem;
  border-bottom: 1px solid #e6e6e6;
  border-top: none;
  border-right: none;
  border-left: none;

  &:nth-child(1) {
    border-radius: 1px 1px 0 0;
  }
`;

function Task({
  task,
  index,
  toggleEditTask,
  saveEditTask,
  onKeyDownEdit,
  toggleDoneTask,
  removeTask,
}) {
  return (
    <Draggable key={task.id} draggableId={task.id} index={index}>
      {(draggableProvided) => (
        <TaskItem
          key={task.id}
          {...draggableProvided.draggableProps}
          ref={draggableProvided.innerRef}
          {...draggableProvided.dragHandleProps}
        >
          <CheckDone
            className="btn btn-secondary"
            style={{ backgroundColor: task.done ? "black" : "white" }}
            onClick={(e) => toggleDoneTask(e, task.id)}
          />
          <Button toggleEditTask={toggleEditTask} task={task} />
          <InputEdit
            task={task}
            saveEditTask={saveEditTask}
            onKeyDownEdit={onKeyDownEdit}
            title="Write your task"
          />
          <ButtonDelete
            className="btn btn-secondary"
            onClick={(e) => removeTask(e, task.id)}
          >
            X
          </ButtonDelete>
        </TaskItem>
      )}
    </Draggable>
  );
}

export default Task;
