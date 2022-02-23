import React, { useState, useRef, useEffect } from "react";

import { motion } from "framer-motion/dist/framer-motion";

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
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <form action="" className="create-todo-input">
      <span className="material-icons-outlined md-30">circle</span>
      <input
        ref={inputRef}
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
        <motion.label
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
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
        </motion.label>
        <motion.label
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
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
        </motion.label>
        <motion.label
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
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
        </motion.label>
        <motion.label
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
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
        </motion.label>
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
