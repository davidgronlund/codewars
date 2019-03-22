const longest = require("./twoToOne");

it("returns longest distinct string", () => {
  expect(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq")).toEqual(
    "abcdefklmopqwxy"
  );
});
