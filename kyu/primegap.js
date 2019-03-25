function slowPrimeGap(g, m, n) {
  const contenders = [];
  const divideWith = [...Array(n + 1).keys()].slice(1).filter(x => x % 2 !== 0);
  [...Array(n + 1).keys()]
    .slice(m)
    .filter(x => x % 2 !== 0)
    .filter(s => s === 3 || s % 3 !== 0)
    .filter(n => divideWith.filter(x => n % x === 0).length === 2)
    .reduce((acc, current) => {
      if (current - acc === g) {
        contenders.push(new Array(acc, current));
      }
      return current;
    });
  return contenders[0] || null;
}

function isPrime(x) {
  if (x === 2) return true;
  if (x % 2 !== 0) {
    for (var i = 2; i <= x / 2; i++) {
      if (x % i === 0) {
        return false;
      }
    }
    return true;
  }
  return false;
}

function primeGap(g, m, n) {
  var lastPrim = null;
  for (var i = m; i < n; i++) {
    if (isPrime(i)) {
      if (lastPrim === null) {
        lastPrim = i;
      } else if (i - lastPrim === g) {
        return [lastPrim, i];
      } else {
        lastPrim = i;
      }
    }
  }
  return null;
}
module.exports = primeGap;
