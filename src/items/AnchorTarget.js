import React from "react";

function AnchorTarget({ id, isFirst }) {
  return (
    <div
      className={`anchor-target ${isFirst ? "anchor-first" : ""}`}
      id={id}
    ></div>
  );
}

export default AnchorTarget;