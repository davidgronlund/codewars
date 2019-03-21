function uniqueInOrder(sequence) {
  let seq = "";
  let numbers = false;
  if (Array.isArray(sequence)) {
    numbers = true;
    seq = sequence.map(c => (!isNaN(c) ? String(c) : c));
  } else {
    seq = sequence.split("");
  }
  let str = seq.reduce((acc, current) => {
    if (acc.split("")[acc.length - 1] === current) {
      return acc;
    }
    acc += current;
    return acc;
  });
  const strArr = str.split("");
  return numbers ? strArr.map(Number) : strArr;
}

module.exports = uniqueInOrder;
