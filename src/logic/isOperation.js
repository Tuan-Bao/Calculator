export default function isOperation(item) {
  const operations = ["+", "-", "x", "/"];
  return operations.includes(item);
}
