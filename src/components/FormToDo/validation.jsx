const validation = (newInput) => {
  let errors = "";
  if (!newInput) {
    errors = "Please enter at least one character";
  }
  return errors;
};

export default validation;
