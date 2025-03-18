const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/userDB");

const userSchema = new mongoose.Schema({
  name: String,
  username: String,
  email: String,
});
// wee need model to perform crud operation
module.exports = mongoose.model("user", userSchema);
