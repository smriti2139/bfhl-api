const express = require("express");
const router = express.Router();

const fibonacci = require("../utils/fibonacci");
const prime = require("../utils/prime");
const lcm = require("../utils/lcm");
const hcf = require("../utils/hcf");
const aiService = require("../services/aiService");

const EMAIL = process.env.OFFICIAL_EMAIL || "smriti1502.be23@chitkarauniversity.edu.in";

// GET /health
router.get("/health", (req, res) => {
  res.status(200).json({
    is_success: true,
    official_email: EMAIL
  });
});

// POST /bfhl
router.post("/bfhl", async (req, res) => {
  try {
    const body = req.body;

    if (body.fibonacci !== undefined) {
      return res.json({
        is_success: true,
        official_email: EMAIL,
        data: fibonacci(body.fibonacci)
      });
    }

   if (Array.isArray(body.prime)) {
  return res.json({
    is_success: true,
    official_email: EMAIL,
    data: prime(body.prime)
  });
}


    if (Array.isArray(body.lcm)) {
      return res.json({
        is_success: true,
        official_email: EMAIL,
        data: lcm(body.lcm)
      });
    }

    if (Array.isArray(body.hcf)) {
      return res.json({
        is_success: true,
        official_email: EMAIL,
        data: hcf(body.hcf)
      });
    }

    if (body.AI !== undefined) {
  const answer = await aiService(body.AI);
  return res.json({
    is_success: true,
    official_email: EMAIL,
    data: answer
  });
}


    res.status(400).json({
      is_success: false,
      official_email: EMAIL,
      error: "Invalid input"
    });

  } catch (err) {
    res.status(500).json({
      is_success: false,
      official_email: EMAIL,
      error: "Server error"
    });
  }
});

module.exports = router;
