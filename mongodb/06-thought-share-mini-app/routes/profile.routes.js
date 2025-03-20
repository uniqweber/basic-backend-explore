const express = require("express");
const verifyToken = require("../middleware/verifyToken");
const verifyUser = require("../middleware/verifyUser");
const User = require("../model/user.model");
const router = express.Router();

router.get("/profile/:userId", verifyToken, verifyUser, async (_req, res) => {
  const user = await User.findOne({_id: _req.params.userId});
  res.render("profile", {user});
});

router.get("/profile/:userId/edit-post/:postId", (_req, res) => {
  res.render("postEdit");
});

router.get("/profile/:userId/edit-profile", (_req, res) => {
  res.render("editProfile");
});

router.post("/post", (req, res) => {
  console.log(req.body);
});

module.exports = router;
