import { Droppable } from "react-beautiful-dnd";
import { Task } from "../../components";

function TasksList({
  filteredTasks,
  toggleEditTask,
  saveEditTask,
  onKeyDownEdit,
  toggleDoneTask,
  removeTask,
}) {
  return (
    <Droppable droppableId="tasks">
      {(droppableProvided) => (
        <ul {...droppableProvided.droppableProps} ref={droppableProvided.innerRef}>
          {filteredTasks &&
            filteredTasks.map((task, index) => (
              <Task
                task={task}
                index={index}
                key={index}
                toggleEditTask={toggleEditTask}
                saveEditTask={saveEditTask}
                onKeyDownEdit={onKeyDownEdit}
                toggleDoneTask={toggleDoneTask}
                removeTask={removeTask}
              />
            ))}
            {droppableProvided.placeholder}
        </ul>
      )}
    </Droppable>
  );
}

export default TasksList;
