const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/testDB")
  .then(() => {
    console.log("mongodb connected");
  })
  .catch((err) => {
    console.log("mongodb error", err);
  });

const registerUserSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

module.exports = mongoose.model("user", registerUserSchema);
