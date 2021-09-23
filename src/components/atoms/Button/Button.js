import styled from "styled-components";

const ButtonComponent = styled.button`
  color: #2E2E2E;
  background-color: #ffffff;
  width: 100%;
  text-align: left;
  font-size: 1.2rem;
`;

function Button({
  toggleEditTask,
  task
}) {
  return (
    <ButtonComponent
      style={{
        textDecoration: task.done ? "line-through" : "",
        display: task.isEditing ? "none" : "block",
      }}
      onClick={(event) => toggleEditTask(event, task.id)}
    >
      {task.text}
    </ButtonComponent>
  );
}

export default Button;
