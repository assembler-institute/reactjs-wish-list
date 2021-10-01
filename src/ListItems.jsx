import { React } from "react";
import paperbin from "./img/paperbin.png"
import notask from "./img/notask.svg"

export default function ListItems(props) {
  const todos = props.items;
  const listItems = todos.map((todo) => {
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

  if (listItems != "") {
  return <div class="list-items"><div>{listItems}</div></div>;
  }
  else{
    return <div class="list-items"><p class="tasks">Your ToDo list is empty!</p><img src={notask} alt="You don't have any task." class="tasksimg" /></div>;
  }
}
