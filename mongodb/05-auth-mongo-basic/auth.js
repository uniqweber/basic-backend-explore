const express = require("express");
const app = express();
const User = require("./model/registerUser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.get("/", (req, res) => {
  const isUser = req.cookies.authToken;
  let user = isUser ? jwt.verify(isUser, "test") : false;
  res.render("index", {user});
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", async (req, res) => {
  const {name, email, password} = req.body;
  //check user already registered or not
  const existsUser = await User.findOne({email});
  if (existsUser) return res.json({message: "User already registered"});
  //hash password
  const hashPassword = await bcrypt.hash(password, 10);
  //create user
  const newUser = await new User({name, email, password: hashPassword});
  await newUser.save();
  //create jwt token and set cookie
  const token = jwt.sign({email}, "test");
  res.cookie("authToken", token);
  res.redirect("/");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", async (req, res) => {
  const {userEmail, userPassword} = req.body;
  //check user is registered or not
  const existsUser = await User.findOne({email: userEmail});
  if (!existsUser) return res.json({message: "User not found"});
  //check password valid or not
  const validPassword = await bcrypt.compare(userPassword, existsUser.password);
  if (!validPassword) return res.json({message: "Invalid Password"});
  //create jwt token
  const token = jwt.sign({email: userEmail}, "test");
  // set in cookie
  res.cookie("authToken", token);
  res.redirect("/");
});

app.get("/logout", (req, res) => {
  res.clearCookie("authToken");
  res.redirect("/");
});

app.listen(3000);
