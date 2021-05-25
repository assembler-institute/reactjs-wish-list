import React from "react";
import "./_Button.scss";
// import { Link } from "react-router-dom";

const Checkbox = ({ ...newers }) => {
  return <input className="check" type="checkbox" {...newers} />;
};

function Button({ ...newers }) {
  return <input className="but" type="button" {...newers} />;
}
function ClearBut({ ...newers }) {
  return <input className="butClear" type="button" {...newers} />;
}
export { Button, Checkbox, ClearBut };
