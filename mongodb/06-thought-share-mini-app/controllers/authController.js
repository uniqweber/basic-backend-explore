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

    await User.create({name, username: formatUsername, email, password: hashPassword});
    const authToken = jwt.sign({email}, process.env.JWT_SECRET_KEY);

    res.cookie("authToken", authToken);
    res.redirect("/profile");
  } catch (error) {
    console.log("register error:", error);
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

module.exports = {register, logout};
