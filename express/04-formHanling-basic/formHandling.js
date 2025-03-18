const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  fs.readdir("notes", (err, files) => {
    err ? console.log(err) : res.render("index", {notes: files});
  });
});

app.listen(3000, () => console.log("server running on port", 3000));
