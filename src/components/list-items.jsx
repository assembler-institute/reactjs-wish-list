import React from "react";

function handleSubmit(e) {
  e.preventDefault();
}

export default function ListItems() {
  return <li>
      <form onSubmit={handleSubmit}>
        <input type="checkbox" checked="false" name="Checking" />
        <input type="text" name="todo" edit="disabled" onClick="{toggleEdit}" />
        <input
          type="text"
          name="todo"
          edit="enable"
          onClick="{handleToggleEdit}"
          hidden
        />
        <button type="button" onClick="{handleDelete}">
          Delete
        </button>
      </form>
    </li>;
}
