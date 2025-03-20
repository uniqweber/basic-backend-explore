const express = require("express");
const verifyToken = require("../middleware/verifyToken");
const verifyUser = require("../middleware/verifyUser");
const {createPost, userProfile, deletePost} = require("../controllers/postController");
const router = express.Router();

router.get("/profile/:userId", verifyToken, verifyUser, userProfile);

router.get("/profile/:userId/edit-post/:postId", (_req, res) => {
  res.render("postEdit");
});

router.get("/profile/:userId/edit-profile", (_req, res) => {
  res.render("editProfile");
});

router.get("/delete/:userId/delete-post/:postId", verifyToken, verifyUser, deletePost)

router.post("/profile/:userId/post", verifyToken, verifyUser, createPost);


module.exports = router;
