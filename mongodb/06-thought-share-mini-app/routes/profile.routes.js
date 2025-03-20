const express = require("express");
const verifyToken = require("../middleware/verifyToken");
const verifyUser = require("../middleware/verifyUser");
const {createPost, userProfile, deletePost, likePost, editPost, updatePost} = require("../controllers/postController");
const router = express.Router();

router.get("/profile/:userId", verifyToken, verifyUser, userProfile);
router.get("/profile/:userId/like-post/:postId", verifyToken, likePost);
router.get("/profile/:userId/delete-post/:postId", verifyToken, verifyUser, deletePost);
router.get("/profile/:userId/edit-post/:postId", verifyToken, verifyUser, editPost);

router.get("/profile/:userId/edit-profile", (_req, res) => {
  res.render("editProfile");
});

router.post("/profile/:userId/create-post", verifyToken, verifyUser, createPost);
router.post("/profile/:userId/update-post/:postId", verifyToken, verifyUser, updatePost);

module.exports = router;
