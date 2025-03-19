const mongoose = require("mongoose");
const mongodbUri = "mongodb://localhost:27017/testDB";

mongoose
  .connect(mongodbUri)
  .then(() => {
    console.log("mongodb connected");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB:", err);
  });

const carSchema = mongoose.Schema({
  name: String,
  model: String,
  power: String,
});

module.exports = mongoose.model("car", carSchema);
