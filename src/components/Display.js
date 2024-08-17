import React from "react";
import "./Display.css";

function Display(props) {
  const { value } = props;

  return (
    <div className="display">
      <div>{value}</div>
    </div>
  );
}

export default Display;
