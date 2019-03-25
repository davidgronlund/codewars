const songDecoder = require("../songdecoder");

it("return correct song", () => {
  expect(songDecoder("AWUBBWUBC")).toEqual("A B C");
  expect(songDecoder("AWUBWUBWUBBWUBWUBWUBC")).toEqual("A B C");
  expect(songDecoder("WUBAWUBBWUBCWUB")).toEqual("A B C");
});
