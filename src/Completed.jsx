import React from "react";
import paperbin from "./img/paperbin.png"
import notask from "./img/notask.svg"

export default function Completed(props) {
  const todos = props.items;
  const filtered = todos.filter((item) => item.completed === true);
  const completed = filtered.map((todo) => {
    return (
      <div key={todo.id}>
        <input class="checkbox" id={todo.id}
          type="checkbox"
          checked={todo.completed}
          onChange={() => props.handleCompleted(todo.id)}
        />
        <label htmlFor={todo.id}>          </label>
        <input class="text"
          type="text"
          onChange={(e) => props.handleEdit(e.target.value, todo.id)}
          value={todo.content}
        />
        <img src={paperbin} alt="delete" onClick={() => props.handleDelete(todo.id)} />
      </div>
    );
  });

  if (completed != "") {
  return <div class="list-items"><div>{completed}</div></div>;
  }
  else{
    return <div class="list-items"><p class="tasks">Your completed ToDo list is empty!</p><img src={notask} alt="You don't have any task." class="tasksimg" /></div>;
  }
}
