const score = games => {
  return games.reduce((total, current) => {
    if (current[0] > current[2]) {
      return total + 3;
    }
    if (current[0] == current[2]) {
      return total + 1;
    }
    if (current[0] < current[2]) {
      return total;
    }
  }, 0);
};

module.exports = score;
