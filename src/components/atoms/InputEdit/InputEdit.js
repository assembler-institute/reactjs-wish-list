import { Form, Formik } from "formik";
import styled from "styled-components";

import { ErrorMessage } from 'components/atoms'

import taskSchema from "components/molecules/NewTaskForm/task-schema";

const Input = styled.input`
  font-size: 1.2rem;
  font-weight: 600;
  width: 100%;
  text-align: left;
  padding-left: 1rem;
  border-bottom: 1px solid black;
  outline: none;

  &:active {
    border-bottom: 1px solid black;
  }
`;

const FormEditTask = styled(Form)`
  width: 100%;
`;

function InputEdit({ task, saveEditTask, onKeyDownSubmit, onKeyDownEdit }) {
  return (
    <Formik
      initialValues={{
        text: task.text,
        done: task.done,
      }}
      validationSchema={taskSchema}
      onSubmit={(values, { resetForm }) => {
        saveEditTask(values.text, task.id);
        resetForm({});
      }}
    >
      {({ handleSubmit, errors, values, touched, handleChange }) => (
        <FormEditTask onKeyDown={(e) => onKeyDownSubmit(e, handleSubmit)}>
          <Input
            name="text"
            type="text"
            style={{ display: task.isEditing ? "block" : "none" }}
            value={values.text}
            onChange={(e) => {
              handleChange(e);
              onKeyDownEdit(e, task.id)
            }}
          />
          {touched.text && errors.text ? (
            <ErrorMessage errors={errors} />
          ) : null}
        </FormEditTask>
      )}
    </Formik>
  );
}

export default InputEdit;
