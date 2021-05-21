import React from "react";

import TasksListEntry from "../TasksListEntry";

function TasksList({ tasks, handleDeleteTask, ...props }) {
  return (
    <aside {...props}>
      <div className="row flex-column">
        <div className="col shopping__cart__header">
          <h2 className="h3 mt-2">Tasks List</h2>
          <hr className="mb-3" />
        </div>

        {tasks.length > 0 ? (
          tasks.map((task) => (
            <TasksListEntry
              key={task.id}
              id={task.id}
              title={task.title}
              isCompleted={task.isCompleted}
              editing={false}
              handleDeleteTask={handleDeleteTask}
            />
          ))
        ) : (
          <div className="col mb-4">
            <h4>You have no tasks</h4>
          </div>
        )}
      </div>
    </aside>
  );
}

export default TasksList;
