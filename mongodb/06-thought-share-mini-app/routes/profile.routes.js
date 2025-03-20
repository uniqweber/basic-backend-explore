const express = require("express");
const verifyToken = require("../middleware/verifyToken");
const verifyUser = require("../middleware/verifyUser");
const {
  createPost,
  userProfile,
  deletePost,
  likePost,
  editPost,
  updatePost,
  editProfilePhoto,
  updateProfilePhoto,
} = require("../controllers/profileController");
const upload = require("../config/multer.config");
const router = express.Router();

router.get("/profile/:userId", verifyToken, verifyUser, userProfile);
router.get("/profile/:userId/like-post/:postId", verifyToken, likePost);
router.get("/profile/:userId/delete-post/:postId", verifyToken, verifyUser, deletePost);
router.get("/profile/:userId/edit-post/:postId", verifyToken, verifyUser, editPost);
router.get("/profile/:userId/edit-profile", verifyToken, verifyUser, editProfilePhoto);

router.post("/profile/:userId/create-post", verifyToken, verifyUser, createPost);
router.post("/profile/:userId/update-post/:postId", verifyToken, verifyUser, updatePost);
router.post("/profile/:userId/edit-profile", verifyToken, verifyUser, upload.single("avatar"), updateProfilePhoto);

module.exports = router;
