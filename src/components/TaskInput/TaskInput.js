import React from "react";

export default function TaskInput() {
  return (
    <fieldset>
      <input type="text" name="taskInput" data-testid="create-todo-input" />
      <input type="checkbox" name="check" className="inputCheck" />
    </fieldset>
  );
}
