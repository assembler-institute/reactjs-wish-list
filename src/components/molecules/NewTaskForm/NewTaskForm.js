import { Formik, Form } from "formik";
import styled from "styled-components";
import { v4 as uuid } from "uuid";

import { InputCreate, ErrorMessage } from "components/atoms";

import taskSchema from "./task-schema";

const StyledNewTaskForm = styled.div`
  border-radius: 5px;
  padding: 1.5rem;
  z-index: 100;
  background-color: ${(props) => props.theme.pageBackground }; 
`;

function addTaskDetails(task) {
  return {
    id: uuid(),
    ...task,
    done: false,
    isEditing: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
}

function NewTaskForm({ saveNewTask, onKeyDownSubmit }) {
  return (
    <StyledNewTaskForm>
      <Formik
        initialValues={{
          text: "",
          done: false,
        }}
        validationSchema={taskSchema}
        onSubmit={(values, { resetForm }) => {
          const newTask = addTaskDetails(values);
          saveNewTask(newTask);
          resetForm({});
        }}
      >
        {({ handleSubmit, errors, values, touched, isValidating, isValid }) => (
          <Form onKeyDown={(e) => onKeyDownSubmit(e, handleSubmit)}>
            <InputCreate
              text={values.text}
            />
            {touched.text && errors.text ? (
              <ErrorMessage errors={errors} />
            ) : null}
          </Form>
        )}
      </Formik>
    </StyledNewTaskForm>
  );
}

export default NewTaskForm;
