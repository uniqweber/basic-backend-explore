const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const {authToken} = req.cookies;
  if (!authToken) return res.redirect("/login");

  try {
    const tokenDecoded = jwt.verify(authToken, process.env.JWT_SECRET_KEY);
    req.user = tokenDecoded;
    next();
  } catch (error) {
    console.log("Token verification failed:", error);
    return res.redirect("/login");
  }
};

module.exports = verifyToken;
