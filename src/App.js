import { useState } from "react";
import Display from "./components/Display";
import "./App.css";
import Keypad from "./components/Keypad";
import calculate from "./logic/calculate";

function App() {
  const [value, setValue] = useState("0");
  const [operation, setOperation] = useState([]);
  const [array, setArray] = useState([]);
  const [flag, setFlag] = useState(false);

  const handleClick = (buttonName) => {
    calculate(
      value,
      setValue,
      operation,
      setOperation,
      array,
      setArray,
      flag,
      setFlag,
      buttonName
    );
  };
  return (
    <div className="App">
      <Display value={value} />
      <Keypad handleClick={handleClick} />
    </div>
  );
}

export default App;
