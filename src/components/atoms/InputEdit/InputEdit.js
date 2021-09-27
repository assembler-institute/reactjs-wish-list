import { Form, Formik } from "formik";
import styled from "styled-components";
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

const ErrorInput = styled.div`
  color: red;
  font-weight: bold;
  font-size: 1.2rem;
  padding-top: 1rem;
  svg {
    margin-right: 0.5rem;
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
              /* saveEditTask(values.text, task.id); */
              onKeyDownEdit(e, task.id)
            }}
          /* onKeyDown={(e) => onKeyDownEdit(e, task.id)} */
          />

          {touched.text && errors.text ? (
            <ErrorInput>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-alert-triangle"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#ff2825"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 9v2m0 4v.01" />
                <path d="M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75" />
              </svg>
              {errors.text}
            </ErrorInput>
          ) : null}
        </FormEditTask>
      )}
    </Formik>
  );
}

export default InputEdit;
