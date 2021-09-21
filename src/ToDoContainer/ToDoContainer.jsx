import React from "react";
import { FormToDo } from "../FormToDo/FormToDo";
import TaskList from "../TaskList/TaskList";

export default function ToDoContainer() {
  return (
    <div>
      <FormToDo />
      <TaskList />
    </div>
  );
}
