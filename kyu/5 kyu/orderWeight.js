const orderWeight = strng => {
  return strng
    .trim()
    .split(" ")
    .reduce((acc, current) => {
      const ret = [...current.trim()].reduce((sum, num) => {
        sum += parseInt(num, 10);
        return sum;
      }, 0);
      acc.push({ o: current, n: ret });
      return acc;
    }, [])
    .sort((a, b) => {
      if (a.n < b.n) {
        return -1;
      }
      if (a.n > b.n) {
        return 1;
      }
      return a.o.localeCompare(b.o);
    })
    .map(x => x.o)
    .join(" ");
};
module.exports = orderWeight;
