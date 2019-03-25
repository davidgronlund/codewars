function longest(s1, s2) {
  //   return [...new Set(s1 + s2)].sort().join("");
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const letters = s1.concat(s2).split("");
  return alphabet
    .map(x => (letters.includes(x) ? x : null))
    .filter(letter => letter != null)
    .join("");
}

module.exports = longest;
