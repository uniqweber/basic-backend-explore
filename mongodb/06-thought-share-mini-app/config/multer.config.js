const multer = require("multer");
const crypto = require("crypto");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/image/uploads");
  },

  filename: (req, file, cb) => {
    const randomName = crypto.randomBytes(16).toString("hex") + path.extname(file.originalname);
    cb(null, randomName);
  },
});

const upload = multer({storage});

module.exports = upload;
