const Post = require("../model/post.model");

const allPost = async (req, res) => {
  const allPost = await Post.find().populate("author");
  const userId = req.user?.id;
  res.render("allPost", {allPost, userId});
};

module.exports = {allPost};
