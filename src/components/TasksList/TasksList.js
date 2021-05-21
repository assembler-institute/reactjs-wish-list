import React from "react";

import TasksListEntry from "../TasksListEntry";

function TasksList({ tasks, handleDeleteTask, ...props }) {
  return (
    <aside {...props}>
      <div className="row flex-column">
        <br />

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
