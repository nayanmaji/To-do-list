const jwt = require("jsonwebtoken");
const JWT_SECRET = "abc@#lkj";

const fetchUser = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send("Plee enter valid I'd !");
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send("Plee enter valid I'd !");
  }
};

module.exports = fetchUser;
