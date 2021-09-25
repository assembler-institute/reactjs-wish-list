import React from "react";
import "./DeleteButton.scss";


function DeleteButton({ id, handleRemove }) {
  return (
    <button type="button" className="btn cancel" onClick={handleRemove} />
  );
}

export default DeleteButton;