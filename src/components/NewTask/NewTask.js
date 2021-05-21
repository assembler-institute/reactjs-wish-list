import React from "react";
import { v4 as uuid } from "uuid";
import { Formik } from "formik";

import taskSchema from "./task-schema";

function addDetailsNewTask(data) {
  return {
    id: uuid(),
    ...data,
  };
}

function NewTask({ saveNewTask }) {
  return (
    <>
      <Formik
        initialValues={{
          title: "",
          isCompleted: false,
        }}
        validationSchema={taskSchema}
        onSubmit={(values) => {
          const newTask = addDetailsNewTask(values);
          saveNewTask(newTask);
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
                  touched.title && errors.title
                    ? "form-control is-invalid"
                    : "form-control"
                }
                id="title"
                name="title"
                type="text"
                placeholder="Insert a new task..."
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.title && errors.title && (
                <p className="invalid-feedback">{errors.title}</p>
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
