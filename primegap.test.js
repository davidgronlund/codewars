const primeGap = require("./primegap");

it("given a gap of 2 return the first valid gap", () => {
  expect(primeGap(2, 1, 10)).toEqual([3, 5]);
  expect(primeGap(2, 100, 110)).toEqual([101, 103]);
  expect(primeGap(4, 100, 110)).toEqual([103, 107]);
  expect(primeGap(6, 100, 110)).toEqual(null);
  expect(primeGap(8, 300, 400)).toEqual([359, 367]);
  expect(primeGap(10, 300, 400)).toEqual([337, 347]);
  const g = primeGap(10, 1, 40000);
  // console.log(g);
  // expect(primeGap(10, 300, 400)).toEqual([1, 50000]);
});
