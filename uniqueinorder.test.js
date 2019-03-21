const uniqueInOrder = require("./uniqueinorder");

test("return no duplicate characters", () => {
  expect(uniqueInOrder("AAAABBBCCDAABBB")).toEqual([
    "A",
    "B",
    "C",
    "D",
    "A",
    "B"
  ]);
});
test("return no duplicate characters", () => {
  expect(uniqueInOrder("ABBCcAD")).toEqual(["A", "B", "C", "c", "A", "D"]);
});
test("return no duplicate characters", () => {
  expect(uniqueInOrder([1, 2, 2, 3, 3])).toEqual([1, 2, 3]);
});
