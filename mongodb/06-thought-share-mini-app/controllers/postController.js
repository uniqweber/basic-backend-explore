const Post = require("../model/post.model");
const User = require("../model/user.model");

const userProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).populate("posts");
    res.render("profile", {user});
  } catch (error) {
    console.log("Profile:", error);
  }
};

const createPost = async (req, res) => {
  try {
    const content = req.body.content;
    const userId = req.params.userId;

    const newPost = await Post.create({content, author: userId});
    await User.findByIdAndUpdate(userId, {$push: {posts: newPost._id}});

    res.redirect("/profile/" + userId);
  } catch (error) {
    console.log("Post create:", error);
  }
};

const deletePost = async (req, res) => {
  const userId = req.params.userId;
  const postId = req.params.postId;

  await User.findByIdAndUpdate(userId, {$pull: {posts: postId}});
  await Post.findByIdAndDelete(postId);

  res.redirect("/login");
};

module.exports = {createPost, userProfile, deletePost};
