import React from "react";
import ToDo from "../ToDo";

function ToDoList({ myToDos, setMyToDos, filterMyToDos }) {
  return (
    <div>
      <ul>
        {filterMyToDos.map((todo) => (
          <ToDo
            key={todo.id}
            text={todo.text}
            myToDos={myToDos}
            todo={todo}
            setMyToDos={setMyToDos}
          />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
