const express = require("express");
const {allPost} = require("../controllers/allPostController");
const verifyToken = require("../middleware/verifyToken");
const router = express.Router();

router.get("/", verifyToken,   allPost);

module.exports = router;
