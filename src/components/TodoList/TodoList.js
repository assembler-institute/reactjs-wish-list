import React from "react";

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const listDate = JSON.parse(localStorage.getItem("list"));

    return (
      <ul>
        {listDate.map((task) => (
          <li key={task.id} id={task.id}>
            <input type="checkbox" />
            <span> {task.title}</span>
            <button type="button">del</button>
          </li>
        ))}
      </ul>
    );
  }
}
