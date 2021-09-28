import { Droppable } from "react-beautiful-dnd";

import { Task, Filters } from "components/molecules";
import { ReactComponent as EmptyTaskSvg } from 'resources/img/empty-task.svg';

function TasksList({
  filterTasks,
  filteredTasks,
  toggleEditTask,
  saveEditTask,
  onKeyDownEdit,
  toggleDoneTask,
  removeTask,
  removeAllCompletedTasks,
  onKeyDownSubmit,
  theme
}) {
  return (
    <>
      <Filters
        filteredTasks={filteredTasks}
        filterTasks={filterTasks}
        removeAllCompletedTasks={removeAllCompletedTasks}
      />
      <Droppable droppableId="tasks">
        {(droppableProvided) => (
          <ul
            {...droppableProvided.droppableProps}
            ref={droppableProvided.innerRef}
          >
            {filteredTasks.length > 0 ? (
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
                  onKeyDownSubmit={onKeyDownSubmit}
                  theme={theme}
                />
              ))
            ) : (
              <div className="p-5">
                <EmptyTaskSvg />
              </div>
            )}
            {droppableProvided.placeholder}
          </ul>
        )}
      </Droppable>
    </>
  );
}

export default TasksList;
