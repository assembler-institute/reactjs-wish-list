import React from "react";

function ToDo({ text, todo, myToDos, setMyToDos }) {
  const deleteHandler = () => {
    setMyToDos(myToDos.filter((element) => element.id !== todo.id));
  };
  const completedHandler = () => {
    setMyToDos(
      myToDos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      }),
    );
  };

  // const updateHandler = (newValue) => {
  //   setMyToDos((prevState) =>
  //     prevState.map((item) => (item.id === todo.id ? newValue : item)),
  //   );

  //   setInputText(newValue);
  // };

  return (
    <div className="listItems mt-3">
      <li className={`todoItems ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button className="checkTodo" type="button" onClick={completedHandler}>
        <i className="fas fa-check" />
      </button>
      <button className="deleteTodo" type="button" onClick={deleteHandler}>
        <i className="far fa-trash-alt" />
      </button>
      <button className="editTodo" type="button">
        <i className="far fa-edit" />
      </button>
    </div>
  );
}

export default ToDo;
