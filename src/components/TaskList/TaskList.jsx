import React from "react";
import RemoveButton from "../RemoveButton/RemoveButton";
import Task from "../Task/Task";

export default function TaskList() {
  return (
    <>
      <div>
        <Task />
      </div>
      <RemoveButton />
    </>
  );
}
