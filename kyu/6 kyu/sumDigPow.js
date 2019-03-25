const sumDigPow = (a, b) => {
  return [...Array(b + 1).keys()].splice(a).reduce((acc, current) => {
    const product = [...current.toString()].reduce((prod, x, index) => {
      prod += x ** (index + 1);
      return prod;
    }, 0);
    if (product == current) {
      acc.push(current);
    }
    return acc;
  }, []);
};

module.exports = sumDigPow;
