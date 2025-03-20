const express = require("express");
const {allPost} = require("../controllers/allPostController");
const verifyToken = require("../middleware/verifyToken");
const verifyUser = require("../middleware/verifyUser");
const router = express.Router();

router.get("/", verifyToken,   allPost);

module.exports = router;
