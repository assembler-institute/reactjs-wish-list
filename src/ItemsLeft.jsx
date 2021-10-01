import React from "react";

export default function ItemsLeft(props) {
  const filtered = props.items.filter((item) => item.completed === false);
  return <p>{filtered.length}</p>;
}
