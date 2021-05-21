import * as Yup from "yup";

const taskSchema = Yup.object().shape({
  taskText: Yup.string()
    .min(2, "The task description is too short!")
    .max(50, "The task description is too long!")
    .required("A task description is required"),
});

export default taskSchema;
