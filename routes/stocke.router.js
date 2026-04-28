const express = require("express");
const router = express.Router();

const { buyStock } = require("../controllers/stockController");

// Routes
router.post("/buy", buyStock);

module.exports = router;