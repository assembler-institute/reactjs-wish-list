import { Button } from "../../components";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const CheckDone = styled.button`
  width: 23px;
  margin-right: 1rem;
  border-radius: 23px;
`;

const ButtonDelete = styled.button`
  color: grey;
  background: white;
  border: 0;
  font-weight: bold;
  &:hover {
    color: black;
    background-color: white;
  }
`;

const TaskItem = styled.li`
  display: flex;
  flex-direction: row;
  min-height: 1px;
  padding: 1.25rem;
  margin-top: 0.5rem;
  border-bottom: 1px solid grey;
  border-top: none;
  border-right: none;
  border-left: none;

  &:nth-child(1) {
    border-radius: 1px 1px 0 0;
  }
`;

const InputEdit = styled.input`
  font-size: 1.2rem;
  font-weight: 600;
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
          key={index}
          {...draggableProvided.draggableProps}
          ref={draggableProvided.innerRef}
          {...draggableProvided.dragHandleProps}
        >
          <CheckDone
            className="btn btn-secondary"
            style={{ backgroundColor: task.done ? "black" : "white" }}
            onClick={(e) => toggleDoneTask(e, task.id)}
          />
          <Button toggleDoneTask={toggleEditTask} task={task} />
          <InputEdit
            className="w-100 text-left pl-3"
            type="text"
            style={{ display: task.isEditing ? "block" : "none" }}
            value={task.text}
            onChange={(e) => saveEditTask(e, task.id)}
            onKeyDown={(e) => onKeyDownEdit(e, task.id)}
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
