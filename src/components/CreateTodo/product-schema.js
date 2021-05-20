import * as Yup from "yup";

const productSchema = Yup.object().shape({
  todo: Yup.string()
    .min(2, "Todo description is too short!")
    .max(50, "Todo description is too long!"),
});

export default productSchema;
