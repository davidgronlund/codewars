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
test("return no duplicate characters with lower case chars", () => {
  expect(uniqueInOrder("ABBCcAD")).toEqual(["A", "B", "C", "c", "A", "D"]);
});
test("return no duplicate characters when number array", () => {
  expect(uniqueInOrder([1, 2, 2, 3, 3])).toEqual([1, 2, 3]);
});
test("works with empty array", () => {
  expect(uniqueInOrder([])).toEqual([]);
});
test("works with char array", () => {
  expect(uniqueInOrder(["A", "B", "B", "C", "c", "A", "D"])).toEqual([
    "A",
    "B",
    "C",
    "c",
    "A",
    "D"
  ]);
});
