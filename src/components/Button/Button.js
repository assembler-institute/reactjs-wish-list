import React from "react";
import "./_Button.scss";
// import { Link } from "react-router-dom";

const Checkbox = ({ handleSelected }) => {
  return <input className="check" type="checkbox" onChange={handleSelected} />;
};

const Button = ({ handleDelete }) => {
  return <input className="but" type="button" onClick={handleDelete} />;
};
export { Button, Checkbox };
