import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import "./Todo.scss";

function todo() {
  return (
    <li>
      <div>
        <input type="checkbox" />
        Prueba 1
      </div>
      <div className="prueba">
        <FontAwesomeIcon icon={faTimes} />
      </div>
    </li>
  );
}

export default todo;
