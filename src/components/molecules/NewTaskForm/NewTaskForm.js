import { Formik, Form } from "formik";
import styled from "styled-components";
import { v4 as uuid } from "uuid";
import { InputCreate } from "../../atoms";

import taskSchema from "./task-schema";

const Search = styled.div`
  border-radius: 5px;
  padding: 1.5rem;
  z-index: 100;
  background-color: white;
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

/* const InputCreate = styled(Field)`
  font-size: 1.2rem;
  font-weight: 600;
  &:invalid {
    border: 1px solid red;
  }
`;
 */
/* const InputCreateError = styled(Field)`
  font-size: 1.2rem;
  font-weight: 600;
  color: red;
  outline: none;
  border: 1px solid red;
`; */
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
    <Search>
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
          </Form>
        )}
      </Formik>
    </Search>
  );
}

export default NewTaskForm;
