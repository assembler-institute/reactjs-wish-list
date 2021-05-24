import React from "react";
import "./_Button.scss";
// import { Link } from "react-router-dom";

const Checkbox = ({ handleSelected }) => {
  return <input className="check" type="checkbox" onChange={handleSelected} />;
};

function Button({ ...newers }) {
  return <input className="but" type="button" {...newers} />;
}
export { Button, Checkbox };
