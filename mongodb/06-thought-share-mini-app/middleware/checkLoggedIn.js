const jwt = require("jsonwebtoken");

const checkLoggedIn = (req, res, next) => {
  const {authToken} = req.cookies;

  if (authToken) {
    try {
      const tokenDecoded = jwt.verify(authToken, process.env.JWT_SECRET_KEY);
      return res.redirect(`/profile/${tokenDecoded?.id}`);
    } catch (error) {
      console.log("Token verification failed:", error);
      res.clearCookie("authToken");
    }
  }

  next();
};

module.exports = checkLoggedIn;
