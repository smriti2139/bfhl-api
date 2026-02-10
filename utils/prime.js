module.exports = (arr) => {
  if (!Array.isArray(arr)) return [];

  return arr.filter(num => {
    if (typeof num !== "number" || num < 2) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  });
};
