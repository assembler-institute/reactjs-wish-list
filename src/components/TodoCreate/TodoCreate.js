import { Component } from "react";
import { Formik } from "formik";

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
          {(props) => (
            <form onSubmit={props.handleSubmit}>
              <Input type="text" handleChange={props.handleChange} handleBlur={props.handleBlur} value={props.values.text} name="text" />
            </form>
          )}
        </Formik>
      </section>
    );
  }
}
