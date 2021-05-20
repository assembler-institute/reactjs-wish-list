import React from "react";
// import { v4 as uuid } from "uuid";
// import { Formik } from "formik";

// import Input from "../Input";
// import Button from "../Button";

// import productSchema from "./product-schema";

import "./CreateTodo.scss";

export default function CreateTodo() {
  return (
    <section className="row create-todo-section">
      <div className="col col-12">
        <form>
          {/* <form onSubmit={this.handleSubmit}> */}
          <input
            className="my-input"
            name="my-input"
            type="text"
            placeholder="insert todo"
            value="todo"
            // onChange={handleChange}
          />
        </form>
        {/* <Formik
          initialValues={{
            todo: "",
          }}
          validationSchema={productSchema}
          // onSubmit={(values) => {
          // const newProduct = addProductDetails(values);
          // saveNewProduct(newProduct);
          // }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            errors,
            values,
            touched,
            // isValidating,
            // isValid,
          }) => (
            <form
              onSubmit={handleSubmit}
              // onKeyDown={(e) => {
              //   if (e.key === "Enter") {
              //     handleSubmit();
              //   }
              // }}
            >
              <Input
                type="text"
                label="Todo"
                id="todo"
                value={values.todo}
                placeholder="Enter todo"
                handleChange={handleChange}
                handleBlur={handleBlur}
                hasErrorMessage={touched.todo}
                errorMessage={errors.todo}
              />
              <Button submitButton block>
                Submit
              </Button>
            </form>
          )}
        </Formik> */}
      </div>
    </section>
  );
}
