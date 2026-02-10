const gcd = (a, b) => {
  if (b === 0) return Math.abs(a);
  return gcd(b, a % b);
};

module.exports = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) return 0;

  return arr.reduce((a, b) => {
    if (typeof a !== "number" || typeof b !== "number") return a;
    return gcd(a, b);
  });
};
