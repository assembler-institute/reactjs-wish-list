import React from "react";

import TodoList from "../../components/todolist";

export default function Home({ todos }) {
  return <TodoList todos={todos} />;
}
