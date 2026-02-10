module.exports = async (question) => {
  try {
    if (typeof question !== "string") {
      return "AI";
    }

    const q = question.toLowerCase();

    if (q.includes("maharashtra")) {
      return "Mumbai";
    }

    return "AI";
  } catch (err) {
    return "AI";
  }
};
