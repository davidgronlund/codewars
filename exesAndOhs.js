function XO(str) {
  const o = [...str.toLowerCase()].reduce((t, c) => {
    t[c] = (t[c] || 0) + 1; // if t[c] is false return 0, then add 1
    return t;
  }, {});
  return o.o === o.x;
}
// 1st iteration:
//      t = {}, c = x, t[c] = undefined which means t[c] evaluates to false which sets t[c] to 1
module.exports = XO;
