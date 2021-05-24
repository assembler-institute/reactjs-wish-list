import * as Yup from "yup";

const productSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "The title is too short!")
    .max(10, "The title is too long!")
    .required("The title is required"),
});

export default productSchema;
