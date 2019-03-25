const deleteNth = (arr, n) => {
  return arr.reduce((a, c) => {
    a.filter(s => s === c).length < n && a.push(c);
    return a;
  }, []);
};

module.exports = deleteNth;
