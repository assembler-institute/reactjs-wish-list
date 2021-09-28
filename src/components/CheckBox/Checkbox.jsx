import React, { useState } from "react";

export default function Checkbox() {
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={(val) => setChecked(val)}
      label={"Count me in"}
    />
  )
}