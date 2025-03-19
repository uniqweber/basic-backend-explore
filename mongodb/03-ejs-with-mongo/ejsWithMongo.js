const express = require("express");
const app = express();
const path = require("path");
const user = require("./model/user");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/create-user", async (req, res) => {
  const {name, email, photoUrl} = req.body;
  await user.create({name, email, photoUrl});
  res.redirect("/all-user");
});

app.get("/all-user", async (req, res) => {
  const allUser = await user.find();
  res.render("allUser", {allUser});
});

app.get("/edit/:userId", async (req, res) => {
  const {userId} = req.params;
  const findUser = await user.findOne({_id: userId});
  res.render("editUser", {user: findUser});
});

app.post("/edit/:userId", async (req, res) => {
  const {name, email, photoUrl} = req.body;
  await user.findOneAndUpdate({_id: req.params.userId}, {name, email, photoUrl});
  res.redirect('/all-user')
});

app.get("/delete/:userId", async (req, res) => {
  const {userId} = req.params;
  await user.findOneAndDelete({_id: userId});
  res.redirect("/all-user");
});

app.listen(3000);
