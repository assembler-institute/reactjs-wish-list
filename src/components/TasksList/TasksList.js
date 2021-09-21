import { Task } from "../../components";

function TasksList({
  filteredTasks,
  toggleEditTask,
  saveEditTask,
  onKeyDownEdit,
  toggleDoneTask,
  removeTask
}) {
  return (
    <div>
      {filteredTasks && filteredTasks.map((task, index) => (
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
    </div>
  )
}

export default TasksList;
