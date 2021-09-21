import * as Yup from "yup";

const taskSchema = Yup.object().shape({
  text: Yup.string().required("The title is too required").min(4, 'The title is too short!').max(50, 'The title is too long!'),
  done: Yup.bool()
});

export default taskSchema;
