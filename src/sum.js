function sum(a = 0, b = 0) {
  if (a === 0 && b === 0) return 0;
  else if (a === -1 && b === -1) return null;
  else return a + b;
}
function compare(a = 0, b = 0) {
  return a > b;
}
module.exports = sum;
module.exports = compare;
