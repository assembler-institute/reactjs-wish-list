import { Formik, Form, Field, ErrorMessage } from "formik";
import { v4 as uuid } from "uuid";

import taskSchema from "./task-schema";

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

function NewTaskForm({
  saveNewTask,
  onKeyDownSubmit
}) {
  return (
    <div className="card">
      <div className="card-body">
        <Formik
          initialValues={{
            text: '',
            done: false
          }}
          validationSchema={taskSchema}
          onSubmit={(values, { resetForm }) => {
            const newTask = addTaskDetails(values);
            saveNewTask(newTask);
            resetForm({});
          }}
        >
          {({
            handleSubmit,
            errors,
            values,
            touched,
            isValidating,
            isValid,
          }) => (
            <Form onKeyDown={(e) => onKeyDownSubmit(e, handleSubmit)}>
              <Field
                type="text"
                className="form-control"
                placeholder="New task"
                id="text"
                value={values.text}
              />
              <ErrorMessage className="invalid-feedback" name="text" />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default NewTaskForm;