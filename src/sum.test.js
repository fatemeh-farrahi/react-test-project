const sum = require("./sum");
const compare = require("./sum");
test("adds 0 + 0 to equal 0", () => {
  expect(sum(0, 0)).not.toBe(-1);
});
// test("equal test", () => {
//   expect(sum(2, 2)).toEqual(4);
// });
test("not tobe test", () => {
  expect(sum(2, 4)).not.toBe(5);
});
test("test toBeDefined ", () => {
  expect(sum(1, 1)).toBeDefined();
});
test("test to Be null", () => {
  var a = null;
  // expect(sum(-1, -1)).toBeNull();
  expect(a).toBeNull();
});
test("compare test 2>1", () => {
  expect(compare(1, 3)).toBeFalsy();
});
test("compare test 2<1", () => {
  expect(compare(2, 1)).not.toBeFalsy();
});
test("two plus two", () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});
test("test adding floating point numbers", () => {
  const value = 0.1 + 0.2;
  //expect(value).toBe(0.2); //    This won't work because of rounding error
  expect(value).toBeCloseTo(0.3); // This works.
});
test("test fati is in the text", () => {
  var str = "hello fati farrahi";
  expect(str).toMatch(/fati/);
  expect(str).not.toMatch(/navid/);
});
const shoppingList = ["bag", "flower", "trash", "paper", "shoes"];

test("the shopping list has beer on it", () => {
  expect(shoppingList).toContain("bag");
  expect(new Set(shoppingList)).toContain("bag");
});
function compileAndroidCode() {
  throw new Error("alo");
}

test("compiling android goes as expected", () => {
  expect(compileAndroidCode).toThrow();
  expect(compileAndroidCode).toThrow(Error);

  // You can also use the exact error message or a regexp
  expect(compileAndroidCode).toThrow("alo");
  expect(compileAndroidCode).toThrow(/alo/);
});
