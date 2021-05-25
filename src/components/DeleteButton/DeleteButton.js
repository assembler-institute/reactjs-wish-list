import React from "react";

import "./DeleteButton.scss";

function DeleteButton({ id, handleRemove }) {
  function onHandleRemove() {
    handleRemove(id);
  }
  return (
    <button type="button" className="btn cancel" onClick={onHandleRemove} />
  );
}

export default DeleteButton;
