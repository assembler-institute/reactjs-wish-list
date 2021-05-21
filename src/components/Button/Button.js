import React from "react";
import "./_Button.scss";

const Checkbox = ({ handleSelected }) => {
  return <input className="check" type="checkbox" onChange={handleSelected} />;
};

const Button = ({ handleDelete }) => {
  return <input className="but" type="button" onClick={handleDelete} />;
};
export { Button, Checkbox };
