const score = require("../score");

it("should return correct score", () => {
  expect(score(["2:1", "1:1", "1:2"])).toEqual(4);
  expect(score(["1:3", "0:0", "3:3"])).toEqual(2);
});
