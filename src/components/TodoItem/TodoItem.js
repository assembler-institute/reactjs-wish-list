import { Component } from "react";
import { Formik } from "formik";
import CheckBox from "../CheckBox";
import DeleteButton from "../DeleteButton";
import Input from "../Input";

export default class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.handleSetText = this.handleSetText.bind(this);
    this.handleSetDone = this.handleSetDone.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleSetText(text) {
    this.props.handleSetText(this.props.id, text);
  }

  handleSetDone(done) {
    this.props.handleSetDone(this.props.id, done);
  }

  handleDelete() {
    this.props.handleDelete(this.props.id);
  }

  render() {
    return (
      <>
        <article>
          <CheckBox handleChange={this.handleSetDone} />
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
          <DeleteButton handleClick={this.handleSetDone} />
        </article>
      </>
    );
  }
}
