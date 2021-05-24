import * as Yup from "yup";

const newTodoSchema = Yup.object().shape({
  content: Yup.string()
    .min(2, "The title is too short!")
    .max(50, "The title is too long!")
    .required("The title is required"),
});

export default newTodoSchema;
