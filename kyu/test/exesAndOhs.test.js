const XO = require("../exesAndOhs");

it("return true if equal number of x's and o's", () => {
  expect(XO("xxoo")).toEqual(true);
});
it("return false if not equal number of x's and o's", () => {
  expect(XO("xooxx")).toEqual(false);
});
