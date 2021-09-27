import styled from "styled-components";
import { Field } from "formik";

const InputCreateStyle = styled(Field)`
  font-size: 1.2rem;
  font-weight: 500;
  padding: .875rem 1.25rem;
  height: calc(2em + 1.25rem + 2px);

  &:invalid {
    border: 1px solid red;
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
