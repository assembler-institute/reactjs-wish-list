import React from "react";

export default function Footer({ handleClear }) {
  return (
    <div>
      3 items left All Active Completed{" "}
      <button type="button" onClick={handleClear}>
        Clear completed
      </button>
    </div>
  );
}
