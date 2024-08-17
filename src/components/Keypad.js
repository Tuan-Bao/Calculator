import React from "react";
import "./Keypad.css";
import Button from "./Button";

function Keypad(props) {
  const { handleClick } = props;

  return (
    <div className="keypad">
      <div>
        <Button name="AC" handleClick={handleClick} />
        <Button name="+/-" handleClick={handleClick} />
        <Button name="%" handleClick={handleClick} />
        <Button name="/" orange handleClick={handleClick} />
      </div>
      <div>
        <Button name="7" handleClick={handleClick} />
        <Button name="8" handleClick={handleClick} />
        <Button name="9" handleClick={handleClick} />
        <Button name="x" orange handleClick={handleClick} />
      </div>
      <div>
        <Button name="4" handleClick={handleClick} />
        <Button name="5" handleClick={handleClick} />
        <Button name="6" handleClick={handleClick} />
        <Button name="-" orange handleClick={handleClick} />
      </div>
      <div>
        <Button name="1" handleClick={handleClick} />
        <Button name="2" handleClick={handleClick} />
        <Button name="3" handleClick={handleClick} />
        <Button name="+" orange handleClick={handleClick} />
      </div>
      <div>
        <Button name="0" wide handleClick={handleClick} />
        <Button name="." handleClick={handleClick} />
        <Button name="=" orange handleClick={handleClick} />
      </div>
    </div>
  );
}

export default Keypad;
