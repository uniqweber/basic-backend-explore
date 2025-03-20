const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.cookies.authToken;
  if (!token) return res.redirect("/login");

  try {
    const tokenDecoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = tokenDecoded;
    next();
  } catch (error) {
    console.log("Token verification failed:", error);
    return res.redirect("/login");
  }
};

module.exports = verifyToken;
