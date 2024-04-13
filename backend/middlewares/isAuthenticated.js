const jwt = require("jsonwebtoken");

function isAuthenticated(req, res, next) {
  try {
    let token = req.headers.authorization;
    if (!token) {
      return res.status(400).json({ message: "No token found in the headers" });
    }
    if (typeof token !== "string" || !token.startsWith("Bearer ")) {
      return res.status(400).json({ message: "Invalid token format" });
    }
    token = token.split(" ")[1];
    const decryptedToken = jwt.verify(token, process.env.SECRET_TOKEN, {
      algorithms: ["HS256"],
    });
    req.currentUserId = decryptedToken.id;
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = isAuthenticated;
