const express = require("express");
const router = express.Router();
const {register, logout, login} = require("../controllers/authController");
const checkLoggedIn = require("../middleware/checkLoggedIn");

router.get("/register", checkLoggedIn, (_req, res) => res.render("register"));
router.get("/login", checkLoggedIn, (_req, res) => res.render("login"));
router.get("/logout", logout);

router.post("/register", register);
router.post("/login", login);

module.exports = router;
