import React from "react";

export default function EditTodo() {
  const onSubmit = async (
    values,
    { setSubmitting, setErrors, setStatus, resetForm },
  ) => {
    try {
      await saveNewTodo(addTodoDetails(values));
      resetForm({});
      setStatus({ success: true });
    } catch (error) {
      setStatus({ success: false });
      setSubmitting(false);
      setErrors({ submit: error.message });
    }
  };
  return (
    <Formik
      initialValues={{
        content: "",
      }}
      validationSchema={newTodoSchema}
      onSubmit={onSubmit}
      onBlur={onSubmit}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        errors,
        values,
        touched,
      }) => (
        <form onSubmit={handleSubmit} onBlur={handleBlur} className="new-todo">
          <Input
            id="content"
            type="text"
            className="input"
            value={values.content}
            placeholder="Add new todo"
            handleChange={handleChange}
            handleBlur={handleBlur}
            hasErrorMessage={touched.title}
            errorMessage={errors.title}
          />
        </form>
      )}
    </Formik>
  );
}
