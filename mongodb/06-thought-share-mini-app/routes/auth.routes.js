const express = require("express");
const {register, logout, login} = require("../controllers/authController");
const router = express.Router();

router.get("/register", (_req, res) => {
  res.render("register");
});

router.get("/login", (_req, res) => {
  res.render("login");
});

router.get("/logout", logout);

router.post("/register", register);
router.post("/login", login);

module.exports = router;
