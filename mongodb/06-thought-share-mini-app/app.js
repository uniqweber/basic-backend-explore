const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("");
});
app.get("/register", (req, res) => {
  res.render("register");
});
app.get("/login", (req, res) => {
  res.render("login");
});
app.get("/profile", (req, res) => {
  res.render("profile");
});
app.get("/edit-post", (req, res) => {
  res.render("postEdit");
});
app.get("/edit-profile", (req, res) => {
  res.render("editProfile");
});

app.listen(3000);
