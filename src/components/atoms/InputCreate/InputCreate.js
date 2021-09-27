import styled from "styled-components";
import { Field } from "formik";

const InputCreateStyle = styled(Field)`
  font-size: 1.2rem;
  font-weight: 500;
  padding: .875rem 1.25rem;
  height: calc(2em + 1.25rem + 2px);
  background-color: transparent !important;
  border-color: ${(props) => props.theme.borderColor};
  color: ${(props) => props.theme.titleColor};
  transition: none;
  &:invalid {
    border: 1px solid red;
  }
  &:focus{
    color: ${(props) => props.theme.titleColor};
  }
`;

function InputCreate({ text }) {
  return (
    <InputCreateStyle
      type="text"
      className="form-control"
      placeholder="New task"
      id="text"
      name="text"
      value={text}
      title="Write your task"
    />
  );
}

export default InputCreate;
