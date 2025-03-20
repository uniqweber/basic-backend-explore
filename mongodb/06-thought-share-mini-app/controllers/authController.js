const User = require("../model/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  try {
    const {name, username, email, password} = req.body;
    const formatUsername = username?.split(" ").join("").toLowerCase();

    const isUserExists = await User.findOne({email});
    if (isUserExists) return res.json({message: "User already exists"});

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({name, username: formatUsername, email, password: hashPassword});
    const authToken = jwt.sign({email, id: newUser._id}, process.env.JWT_SECRET_KEY);

    res.cookie("authToken", authToken);
    res.redirect(`/profile/${newUser._id}`);
  } catch (error) {
    console.log("register error:", error);
    res.json({message: "Something went wrong!"});
  }
};

const login = async (req, res) => {
  try {
    const {email, password} = req.body;

    const isRegisteredUser = await User.findOne({email});
    if (!isRegisteredUser) return res.json({message: "User not found!"});

    const validPassword = await bcrypt.compare(password, isRegisteredUser.password);
    if (!validPassword) return res.join({message: "Wrong password"});

    const authToken = jwt.sign({email, id: isRegisteredUser._id}, process.env.JWT_SECRET_KEY);
    res.cookie("authToken", authToken);
    res.redirect(`/profile/${isRegisteredUser._id}`);
  } catch (error) {
    console.log("login error:", error);
    res.json({message: "Something went wrong!"});
  }
};

const logout = async (req, res) => {
  try {
    res.clearCookie("authToken");
    res.redirect("/login");
  } catch (error) {
    console.log("Logout error:", error);
    res.json({message: "Something went wrong!"});
  }
};

module.exports = {register, login, logout};
