import * as Yup from "yup";

const editSchema = Yup.object().shape({
  name: Yup.string()
    .required("The todo name is required")
    .min(2, "The todo name is too short!")
    .max(50, "The todo name is too long!"),
});

export default editSchema;
