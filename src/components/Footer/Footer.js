import React from "react";

import "./Footer.scss";

function Footer() {
  return (
    <footer>
      <div>5 items left</div>
      <div>
        <button type="button">All</button>
        <button type="button">Actived</button>
        <button type="button">Completed</button>
      </div>
      <div className="">Clear Completed</div>
    </footer>
  );
}

export default Footer;
