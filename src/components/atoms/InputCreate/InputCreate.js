import styled from "styled-components";
import { Field } from "formik";

const InputCreateStyle = styled(Field)`
  font-size: 1.2rem;
  font-weight: 600;
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
