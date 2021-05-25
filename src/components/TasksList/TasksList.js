import React from "react";

import TasksListEntry from "../TasksListEntry";

function TasksList({
  tasks,
  noTasksMessage,
  handleDeleteTask,
  handleUpdateTask,
  handleToggleEditing,
  handleToggleCheck,
  ...props
}) {
  return (
    <aside {...props}>
      <div className="row flex-column tasks-list">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <TasksListEntry
              key={task.id}
              id={task.id}
              title={task.title}
              isCompleted={task.isCompleted}
              editing={task.isEditing}
              handleDeleteTask={handleDeleteTask}
              handleUpdateTask={handleUpdateTask}
              handleToggleEditing={handleToggleEditing}
              handleToggleCheck={handleToggleCheck}
            />
          ))
        ) : (
          <div className="col mb-4 mt-4">
            <h4>You have no{noTasksMessage} tasks</h4>
          </div>
        )}
      </div>
    </aside>
  );
}

export default TasksList;
