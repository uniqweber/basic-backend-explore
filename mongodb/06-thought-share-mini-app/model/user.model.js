const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: String,
    username: String,
    email: {type: String, unique: true},
    password: String,
    profilePic: {type: String, default: "/image/uploads/default.jpeg"},
    posts: [{type: mongoose.Schema.Types.ObjectId, ref: "Post"}],
  },
  {timestamps: true}
);

const User = mongoose.model("User", userSchema);

module.exports = User;
