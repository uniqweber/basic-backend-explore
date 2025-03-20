const express = require("express");
const router = express.Router();

router.get("/profile", (req, res) => {
  res.render("profile");
});
router.get("/edit-post", (req, res) => {
  res.render("postEdit");
});
router.get("/edit-profile", (req, res) => {
  res.render("editProfile");
});

module.exports = router;
