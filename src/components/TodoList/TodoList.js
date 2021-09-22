import React from "react";
import "./TodoList.scss";

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const listDate = JSON.parse(localStorage.getItem("list"));

    return (
      <ul className="item__list">
        {listDate.map((task) => (
          <li key={task.id} id={task.id} className="item__list--item">
            <div>
              <input type="checkbox" />
              <span> {task.title}</span>
            </div>
            <button type="button">x</button>
          </li>
        ))}
      </ul>
    );
  }
}
