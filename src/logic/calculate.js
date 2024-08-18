import operate from "./operate";
import isNumber from "./isNumber";
import isOperation from "./isOperation";

export default function calculate(
  value,
  setValue,
  operation,
  setOperation,
  array,
  setArray,
  flag,
  setFlag,
  buttonName
) {
  if (buttonName === "AC") {
    setValue("0");
    setOperation([]);
    setArray([]);
    setFlag(false);
  }

  if (isNumber(buttonName)) {
    if (buttonName === "0" && value === "0") {
      setValue(buttonName);
    } else if (flag === false) {
      if (value === "0") {
        setValue(buttonName);
      } else {
        setValue(value + buttonName);
      }
    } else if (flag === true) {
      setValue(buttonName);
      setFlag(!flag);
    }
  }

  if (isOperation(buttonName)) {
    var num;
    if (
      operation[operation.length - 1] === "x" ||
      operation[operation.length - 1] === "/"
    ) {
      let temp = array.pop();
      let cur_op = operation.pop();
      num = operate(temp, value, cur_op);
    }

    if (flag === false) {
      let op = [...operation, buttonName];
      setOperation(op);
      if (num === undefined) {
        let new_arr = [...array, value];
        setArray(new_arr);
      } else {
        let new_arr = [...array, num];
        setArray(new_arr);
      }

      setFlag(!flag);
    } else if (flag === true) {
      operation.pop();
      let op = [...operation, buttonName];
      setOperation(op);
    }
  }

  if (buttonName === "+/-") {
    let new_value = (-1 * parseFloat(value)).toString();
    setValue(new_value);
  }

  if (buttonName === "%") {
    let new_value = (parseFloat(value) / 100).toString();
    setValue(new_value);
  }

  if (buttonName === ".") {
    if (value.includes(".")) {
      return;
    }
    let new_value = value + ".";
    setValue(new_value);
  }

  if (buttonName === "=") {
    if (operation.length === 0) {
      return;
    }

    if (
      operation[operation.length - 1] === "x" ||
      operation[operation.length - 1] === "/"
    ) {
      let cur_op = operation.pop();
      let num_1 = array.pop();
      let num = operate(num_1, value, cur_op);
      array.push(num);
    } else {
      array.push(value);
    }
    while (array.length > 1 && operation.length > 0) {
      let num1 = array.shift();
      let num2 = array.shift();
      let cur_op = operation.shift();
      let num = operate(num1, num2, cur_op);
      array.unshift(num);
    }
    setArray([]);
    setValue(array[0]);
    setOperation([]);
  }
}
