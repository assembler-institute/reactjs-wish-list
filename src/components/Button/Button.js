function Button({toggleEditTask,task}) {
  return (
    <button
      className="w-100 text-left pl-3"
      style={{
        textDecoration: task.done ? "line-through" : "",
        display: task.isEditing ? "none" : "block",
      }}
      onClick={(event) => toggleEditTask(event, task.id)}
    >{task.text}</button>
  );
}

export default Button;
