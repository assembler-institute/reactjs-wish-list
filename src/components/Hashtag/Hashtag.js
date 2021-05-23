import React from "react";

import "./Hashtag.scss";

export default function Hashtag({ hashtagDisplayed }) {
  return (
    <div
      className={
        hashtagDisplayed
          ? "container__hashtag display-flex"
          : "container__hashtag"
      }
    >
      <div>
        <div className="hashtagRed"> </div>
        <p>Very important</p>
      </div>
      <div>
        <div className="hashtagOrange"> </div>
        <p>Important</p>
      </div>
      <div>
        <div className="hashtagGreen"> </div>
        <p>Slope</p>
      </div>
    </div>
  );
}
