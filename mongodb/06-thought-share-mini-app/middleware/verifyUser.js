const verifyUser = (req, res, next) => {
  const {userId} = req.params;
  const {id: currentUserId} = req.user;

  if (userId !== currentUserId) {
    res.clearCookie("authToken");
    return res.redirect("/login");
  }

  next();
};

module.exports = verifyUser;
