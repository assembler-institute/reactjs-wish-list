import React from "react";
import { Formik } from "formik";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import Button from "../button";
import TodoInput from "../TodoInput";
import Hashtag from "../Hashtag";

import "../../_text.scss";
import "./todo.scss";
import "../TodoInput/TodoInput.scss";

import newTodoSchema from "../NewTodo/NewTodoSchema";

function Todo({
  id,
  content,
  handleIsActive,
  isActive,
  deleteTodo,
  hashtagDisplayed,
  displayHashtag,
  editTodo,
  hashtag,
  changeHashtag,
}) {
  function deleteTodoId() {
    deleteTodo(id);
  }

  function onSave(values) {
    editTodo(id, values.target.value);
  }

  return (
    <>
      <li className="list">
        <div className="container-list">
          <span className={`hashtag ${hashtag}`}> </span>

          <Button id={id} handleIsActive={handleIsActive} isActive={isActive} />
          <div className="todo-input">
            <Formik
              initialValues={{
                content: "",
              }}
              validationSchema={newTodoSchema}
              onSubmit={onSave}
              onChange={onSave}
              onBlur={onSave}
            >
              {({ handleChange, handleBlur, handleSubmit }) => (
                <form
                  onSubmit={handleSubmit}
                  onChange={id && onSave}
                  onBlur={id && onSave}
                  className="todo-form"
                >
                  <TodoInput
                    className={
                      isActive
                        ? "input text__check text__normal--check"
                        : "input text__normal"
                    }
                    id={id}
                    content={content}
                    displayHashtag={displayHashtag}
                    hashtagDisplayed={hashtagDisplayed}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                  />
                </form>
              )}
            </Formik>
          </div>
          <div className="delete">
            <FontAwesomeIcon icon={faTrashAlt} onClick={deleteTodoId} />
          </div>
        </div>
        <Hashtag
          id={id}
          hashtag={hashtag}
          hashtagDisplayed={hashtagDisplayed}
          changeHashtag={changeHashtag}
        />
      </li>
    </>
  );
}

export default Todo;
