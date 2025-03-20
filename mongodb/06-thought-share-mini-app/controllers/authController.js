const User = require("../model/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  try {
    const {name, username, email, password} = req.body;
    const formatUsername = username?.split(" ").join("").toLowerCase();

    // check user exists or not
    const isUserExists = await User.find({email});
    if (isUserExists) return res.json({message: "User already exists"});

    // secure user password
    const hashPassword = await bcrypt.hash(password, 10);

    // save the user in the database
    await User.create({name, username: formatUsername, email, password: hashPassword});

    // create auth token save in the cookie
    const authToken = jwt.sign({email}, process.env.JWT_SECRET_KEY);
    res.cookie("authToken", authToken);
    res.redirect("/profile");
    
  } catch (error) {
    console.log(error);
  }
};
