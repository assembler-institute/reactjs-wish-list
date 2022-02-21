import React, { useState } from "react";

import "./CreateToDo.scss";

const classNames = require("classnames");

export default function CreateToDo({
  value,
  handleChange,
  handleSubmit,
  handleKeyPress,
  emptyError,
}) {
  const [todoLabel, setTodoLabel] = useState("");
  return (
    <form action="" className="create-todo-input">
      <span className="material-icons-outlined md-30">circle</span>
      <input
        className={emptyError ? "inputError" : ""}
        type="text"
        placeholder={
          !emptyError
            ? "Create new item"
            : "Please enter at least one character"
        }
        value={value}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        data-testid="create-todo-input"
        name="text"
      />
      <fieldset required>
        <label
          htmlFor="green-option"
          className={
            todoLabel === "green"
              ? classNames("label-border-green", "green-label")
              : "green-label"
          }
        >
          <input
            type="radio"
            id="green-option"
            name="label"
            value="#06d6a0"
            onChange={handleChange}
            style={{ display: "none" }}
            onClick={() => setTodoLabel("green")}
          />
        </label>
        <label
          className={
            todoLabel === "red"
              ? classNames("label-border-red", "red-label")
              : "red-label"
          }
          htmlFor="red-option"
        >
          <input
            type="radio"
            id="red-option"
            name="label"
            value="#ef476f"
            onChange={handleChange}
            style={{ display: "none" }}
            onClick={() => setTodoLabel("red")}
          />
        </label>
        <label
          className={
            todoLabel === "orange"
              ? classNames("label-border-orange", "orange-label")
              : "orange-label"
          }
          htmlFor="orange-option"
        >
          <input
            type="radio"
            id="orange-option"
            name="label"
            value="#fb5607"
            onChange={handleChange}
            style={{ display: "none" }}
            onClick={() => setTodoLabel("orange")}
          />
        </label>
        <label
          className={
            todoLabel === "blue"
              ? classNames("label-border-blue", "blue-label")
              : "blue-label"
          }
          htmlFor="blue-option"
        >
          <input
            type="radio"
            id="blue-option"
            name="label"
            value="#3a86ff"
            onChange={handleChange}
            style={{ display: "none" }}
            onClick={() => setTodoLabel("blue")}
          />
        </label>
      </fieldset>
      <button
        type="submit"
        style={{ display: "none" }}
        onClick={handleSubmit}
        name=""
        value=""
      />
    </form>
  );
}
