const express = require("express");
const app = express();

const middleware = (req, res, next) => {
  console.log("middleware called");
  next();
};

app.use(middleware);
app.use((req, res, next) => {
  console.log("middleware two called");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Running on port", 3000);
});
