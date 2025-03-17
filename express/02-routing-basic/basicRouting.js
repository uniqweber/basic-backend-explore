const express = require("express");
const app = express();

// root route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// basic route
app.get("/about", (req, res) => {
  res.send("About Page");
});

// dynamic route parameter
app.get("/user/:id", (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});

//  query parameter
app.get("/search", (req, res) => {
  res.send(`Search Query: ${req.query.q}`);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("server running on port", port);
});
