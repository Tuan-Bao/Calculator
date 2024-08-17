import React from "react";
import "./Button.css";

function Button(props) {
  const { name, wide, orange, handleClick } = props;
  const btnClass = wide ? "wide" : orange ? "orange" : "";
  return (
    <button className={btnClass} onClick={() => handleClick(name)}>
      {name}
    </button>
  );
}

export default Button;
