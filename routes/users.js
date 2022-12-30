const express = require("express");
const userRoutes = express.Router();


userRoutes.get("/", (req, res) => {
  res.json({ status: 200, data: {} });
});

module.exports = userRoutes;