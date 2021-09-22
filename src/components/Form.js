import React from "react";

const Form = ({ inputText, setInputText, todoItems, setTodoItems }) => {
  const inputTextHandler = (e) => {
    // console.log(e.target.value);
    setInputText(e.target.value);
  };

  const inputSubmitHandler = (e) => {
    e.preventDefault();
    setTodoItems([
      ...todoItems,
      {
        text: inputText,
        done: false,
        id: Math.random() * 1000,
        isEditing: false,
      },
    ]);
    setInputText("");
  };

  return (
    <form className="form">
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="form-input"
        placeholder="..."
      />
      <button onClick={inputSubmitHandler} className="form-btn" type="submit">
        <i className="far fa-plus-square" />{" "}
        {/* Empty components are self - closing */}
      </button>
    </form>
  );
};

export default Form;
