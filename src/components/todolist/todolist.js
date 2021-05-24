import React from "react";
import Todo from "../Todo";
import "./todolist.scss";
import NoTodo from "../NoTodo";

function TodoList({
  todos,
  handleIsActive,
  deleteTodo,
  handleIsEdit,
  displayHashtag,
  changeHashtag,
  editTodo,
  darkMode,
}) {
  const completed = todos.filter((todo) => todo.isActive === true);
  const active = todos.filter((todo) => todo.isActive === false);

  if (todos.length === 0) {
    return <NoTodo darkMode={darkMode} />;
  }
  if (active > 0 && completed > 0) {
    return (
      <section className={darkMode ? "todo-list dark" : "todo-list"}>
        <ul>
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              id={todo.id}
              content={todo.content}
              isActive={todo.isActive}
              handleIsActive={handleIsActive}
              handleIsEdit={handleIsEdit}
              deleteTodo={deleteTodo}
              hashtagDisplayed={todo.hashtagDisplayed}
              hashtag={todo.hashtag}
              changeHashtag={changeHashtag}
              displayHashtag={displayHashtag}
              editTodo={editTodo}
              darkMode={darkMode}
            />
          ))}
        </ul>
      </section>
    );
  }
  if (active > 0 && completed === 0) {
    return (
      <section className={darkMode ? "todo-list dark" : "todo-list"}>
        <ul>
          <li>error</li>
        </ul>
      </section>
    );
  }
  return (
    <section className={darkMode ? "todo-list dark" : "todo-list"}>
      <ul>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            content={todo.content}
            isActive={todo.isActive}
            handleIsActive={handleIsActive}
            handleIsEdit={handleIsEdit}
            deleteTodo={deleteTodo}
            hashtagDisplayed={todo.hashtagDisplayed}
            displayHashtag={displayHashtag}
            hashtag={todo.hashtag}
            changeHashtag={changeHashtag}
            editTodo={editTodo}
            darkMode={darkMode}
          />
        ))}
      </ul>
    </section>
  );
}

export default TodoList;
