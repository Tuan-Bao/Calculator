import Big from "big.js";
// Hàm Big được sử dụng để làm việc với các số lớn hoặc số có nhiều chữ số, vượt quá giới hạn của các kiểu số thông thường trong JavaScript.
export default function operate(numberOne, numberTwo, operation) {
  const one = Big(numberOne || "0");
  const two = Big(
    numberTwo || (operation === "/" || operation === "x" ? "1" : "0")
  );

  if (operation === "+") {
    return Number(one.plus(two).toPrecision(4)).toString();
  } else if (operation === "-") {
    return Number(one.minus(two).toPrecision(4)).toString();
  } else if (operation === "x") {
    return Number(one.times(two).toPrecision(4)).toString();
  } else if (operation === "/") {
    if (two === "0") {
      alert("Divide by 0 error");
      return "0";
    } else {
      return Number(one.div(two).toPrecision(4)).toString();
    }
  }
  throw Error(`Unknown operation '${operation}'`);
}
