const hcf = (a, b) => (b === 0 ? a : hcf(b, a % b));

module.exports = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) return 0;

  return arr.reduce((a, b) => {
    if (typeof a !== "number" || typeof b !== "number") return a;
    return Math.abs(a * b) / hcf(a, b);
  });
};
