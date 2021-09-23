import { Droppable } from "react-beautiful-dnd";
import { Task, Filters } from "../../molecules";

function TasksList({
  filterTasks,
  filteredTasks,
  toggleEditTask,
  saveEditTask,
  onKeyDownEdit,
  toggleDoneTask,
  removeTask,
  removeAllCompletedTasks
}) {
  return (
    <>
      <Droppable droppableId="tasks">
        {(droppableProvided) => (
          <ul
            {...droppableProvided.droppableProps}
            ref={droppableProvided.innerRef}
          >
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
      <Filters
        filteredTasks={filteredTasks}
        filterTasks={filterTasks}
        removeAllCompletedTasks={removeAllCompletedTasks}
      />
    </>
  );
}

export default TasksList;
