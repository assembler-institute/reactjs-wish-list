  import React from "react";
  import "./TaskIndicator.scss";
  import NavItems from "../NavItems";

  function TaskIndicator ({ todoLength}) {
    return(
      <footer className="d-flex justify-content-between p-3">
        <div className="gFont"> {todoLength} items left </div>
        <NavItems />
        <div className="gFont">Clear completed</div>
        </footer>
    )
  }

  export default TaskIndicator;
