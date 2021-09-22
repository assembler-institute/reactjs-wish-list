import { Component } from "react";
import { Formik } from "formik";

import Input from "../Input";

export default class TodoCreate extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    //;
  }

  render() {
    return (
      <section>
        <Formik
          initialValues={{ text: this.props.text }}
          onSubmit={(values) => {
            setTimeout(() => {
              this.handleSetText(values.text);
            }, 500);
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, errors, values, touched, isValidating, isValid }) => (
            <form onSubmit={handleSubmit}>
              <Input type="text" name="text" id="text" handleChange={handleChange} handleBlur={handleBlur} value={values.text} invalid={touched.text} />
            </form>
          )}
        </Formik>
      </section>
    );
  }
}
