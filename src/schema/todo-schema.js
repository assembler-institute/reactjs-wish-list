import * as Yup from "yup";

const todoSchema = Yup.object().shape({
  text: Yup.string().required("Please enter at least one character"),
});

export { todoSchema };
