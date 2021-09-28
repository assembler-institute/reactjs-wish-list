import styled from "styled-components";

const Input = styled.input`
  font-size: 1.2rem;
  font-weight: 600;
  width: calc(100% - 2rem);
  text-align: left;
  margin-left: 1rem;
  border-bottom: 1px solid ${(props) => props.theme.titleColor};
  outline: none;
  background-color: transparent;
  color:${(props) => props.theme.titleColor};
  &:active {
    border-bottom: 1px solid ${(props) => props.theme.titleColor};
  }
`;

function InputEdit({ task, values, onKeyDownEdit, handleChange, handleBlur }) {
  return (
    <Input
      name="text"
      type="text"
      style={{ display: task.isEditing ? "block" : "none" }}
      value={values}
      onChange={(e) => {
        handleChange(e);
        onKeyDownEdit(e, task.id);
      }}
      onBlur={(e) => {
        handleBlur(e);
        onKeyDownEdit(e, task.id);
      }}
    />
  );
}

export default InputEdit;
