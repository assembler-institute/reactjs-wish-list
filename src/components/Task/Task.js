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
    <div key={index} className="card card-body mt-2">
      <button
        style={{
          textDecoration: task.done ? 'line-through' : '',
          display: task.isEditing ? 'none' : 'block'
        }}
        onClick={(e) => toggleEditTask(e, task.id)}>
        {task.text}
      </button>
      <input
        type="text"
        style={{ display: task.isEditing ? 'block' : 'none' }}
        value={task.text}
        onChange={e => saveEditTask(e, task.id)}
        onKeyDown={(e) => onKeyDownEdit(e, task.id)}
        autoFocus
      />
      <button
        className="btn btn-secondary"
        onClick={(e) => toggleDoneTask(e, task.id)}
      >
        {task.done ? 'Done' : 'Todo'}
      </button>
      <button
        className="btn btn-secondary"
        onClick={(e) => removeTask(e, task.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default Task;
