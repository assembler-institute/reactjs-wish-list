import React from "react";

function Form({ setInputText, myToDos, setMyToDos, inputText, setMyStatus }) {
  const inputHandler = (event) => {
    setInputText(event.target.value);
  };
  const submitToDos = (event) => {
    event.preventDefault();
    setMyToDos([
      ...myToDos,
      { text: inputText, completed: false, id: Math.random() },
    ]);
    setInputText("");
  };

  const statusHandler = (event) => {
    setMyStatus(event.target.value);
  };

  return (
    <form className="addItem">
      <input
        value={inputText}
        onChange={inputHandler}
        type="text"
        placeholder="Type to do item.."
      />
      <button className="btnAddItem" onClick={submitToDos} type="submit">
        <i className="fas fa-plus fa-2x" />
      </button>
      <div>
        <select className="filterItems" onBlur={statusHandler}>
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="No completed">No completed</option>
        </select>
      </div>
    </form>
  );
}

export default Form;
