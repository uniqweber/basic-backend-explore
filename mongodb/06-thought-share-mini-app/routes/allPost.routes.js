const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("allPost");
});

module.exports = router;