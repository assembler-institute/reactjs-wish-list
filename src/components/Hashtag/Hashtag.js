import React from "react";

import "./Hashtag.scss";

function Hashtag({ id, hashtagDisplayed, changeHashtag }) {
  function changeRed() {
    changeHashtag(id, "red");
  }
  function changeYellow() {
    changeHashtag(id, "yellow");
  }
  function changeGreen() {
    changeHashtag(id, "green");
  }

  return (
    <div
      className={
        hashtagDisplayed
          ? "container__hashtag display-flex"
          : "container__hashtag"
      }
    >
      <button type="button" className="hashtagButton red" onClick={changeRed}>
        <p>Very important</p>
      </button>
      <button
        type="button"
        className="hashtagButton yellow"
        onClick={changeYellow}
      >
        <p>Important</p>
      </button>
      <button
        type="button"
        className="hashtagButton green"
        onClick={changeGreen}
      >
        <p>Slope</p>
      </button>
    </div>
  );
}

export default Hashtag;
