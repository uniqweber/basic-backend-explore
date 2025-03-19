const carModel = require("./carModel");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome Brother");
});

app.get("/create", async (req, res) => {
  const createdCar = await carModel.create({
    name: "Honda 9",
    model: "2016",
    power: "2hp",
  });
  res.send(createdCar);
});
app.get("/update", async (req, res) => {
  const updatedCar = await carModel.findOneAndUpdate({name: "Honda 4"}, {name: "Honda 5"}, {new: true});
  res.send(updatedCar);
});
app.get("/find", async (req, res) => {
  const foundCar = await carModel.find();
  res.send(foundCar);
});

app.get("/delete", async (req, res) => {
  const deletedCar = await carModel.deleteOne({name: "Honda 5"});
  res.send(deletedCar);
});

app.listen(3000);
