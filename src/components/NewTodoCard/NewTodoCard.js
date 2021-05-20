import React from "react";

export default function NewTodoCard() {
  return (
    <form className="flex-row card-wide no-border">
      <label>
        <input type="checkbox" name="completed" className="blue-checkbox" />
      </label>
      <label>
        <input
          type="text"
          name="newTodo"
          placeholder="New Todo"
          className="font-bold font-big full-width input-no-border"
        />
      </label>
    </form>
  );
}
