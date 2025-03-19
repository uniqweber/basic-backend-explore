const express = require("express");
const app = express();
const path = require("path");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  res.send("Welcome to auth");
  const password = "1234";
  let hashPassword = await bcrypt.hash(password, 10);
  let result = await bcrypt.compare(password, hashPassword);
  console.log(result ? "password matched" : "password not matched");
});

app.post("/register", async (req, res) => {
  const {email, password} = req.body;
  const hashPassword = await bcrypt.hash(password, 10);
  const user = {email, password: hashPassword};
  res.send(user);
});

app.get("/jwt", async (req, res) => {
  const token = jwt.sign({email: "hello@gmail.com"}, "secret");
  res.send(token);
});


app.listen(3000);
