import styled from "styled-components";

const Input = styled.input`
  font-size: 1.2rem;
  font-weight: 600;
  width: 100%;
  text-align: left;
  padding-left: 1rem;
`;

function InputEdit({
  task,
  saveEditTask,
  onKeyDownEdit
}) {
  return (
    <Input
      type="text"
      style={{ display: task.isEditing ? "block" : "none" }}
      value={task.text}
      onChange={(e) => saveEditTask(e, task.id)}
      onKeyDown={(e) => onKeyDownEdit(e, task.id)}
    />
  );
}

export default InputEdit;
