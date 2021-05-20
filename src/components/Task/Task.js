import React from "react";

function Task({ children, ...props }) {
  return <li {...props}>{children}</li>;
}

export default Task;
