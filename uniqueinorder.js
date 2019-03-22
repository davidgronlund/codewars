function uniqueInOrder(iterable) {
  let seq = "";
  let isNumberArray = false;
  if (iterable === undefined || iterable.length === 0) {
    return [];
  }
  if (Array.isArray(iterable)) {
    seq = iterable.map(c => {
      if (!isNaN(c)) {
        isNumberArray = true;
        return String(c);
      } else {
        return c;
      }
    });
  } else {
    seq = iterable.split("");
  }
  let str = seq.reduce((acc, current) => {
    if (acc.split("")[acc.length - 1] === current) {
      return acc;
    }
    acc += current;
    return acc;
  });
  const strArr = str.split("");
  if (isNumberArray) {
    return strArr.map(Number);
  }
  return strArr;
}

module.exports = uniqueInOrder;
