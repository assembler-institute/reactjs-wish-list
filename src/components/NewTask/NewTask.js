import React from "react";
import { Formik } from "formik";

import taskSchema from "./task-schema";

function NewTask({ saveNewTask }) {
  return (
    <>
      <Formik
        initialValues={{
          taskText: "",
          isCompleted: false,
        }}
        validationSchema={taskSchema}
        onSubmit={(values) => {
          saveNewTask(values);
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          errors,
          values,
          touched,
        }) => (
          <form
            className="d-flex flex-row justify-content-around"
            onSubmit={handleSubmit}
          >
            <input
              id="isCompleted"
              name="isCompleted"
              type="checkbox"
              value={values.isCompleted}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className="form-group">
              <input
                className={
                  touched.taskText && errors.taskText
                    ? "form-control is-invalid"
                    : "form-control"
                }
                id="taskText"
                name="taskText"
                type="text"
                placeholder="Insert a new task..."
                value={values.taskText}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.taskText && errors.taskText && (
                <p className="invalid-feedback">{errors.taskText}</p>
              )}
            </div>
            <button type="submit" />
          </form>
        )}
      </Formik>
    </>
  );
}

export default NewTask;
