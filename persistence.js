function persistence(num) {
  let count = 0;
  let digits = 0;
  while (digits !== 1 && [...num.toString()].length !== 1) {
    num = [...num.toString()].reduce((acc, current) => acc * current);
    digits = [...num.toString()].length;
    count++;
  }
  return count;
}

module.exports = persistence;
