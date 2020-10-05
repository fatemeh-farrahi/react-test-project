const sum = require("./sum");

test("adds 0 + 0 to equal 0", () => {
  expect(sum(null, null)).toBe(0);
});
