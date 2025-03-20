const express = require("express");
const {register, logout} = require("../controllers/authController");
const router = express.Router();

router.get("/register", (req, res) => {
  res.render("register");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/logout", logout);

router.post("/register", register);
router.post("/login");

module.exports = router;
