const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/testDB")
  .then(() => {
    console.log("Database connect");
  })
  .catch((err) => {
    console.log("mongodb err", err);
  });

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  photoUrl: String,
});

module.exports = mongoose.model("user", userSchema);
