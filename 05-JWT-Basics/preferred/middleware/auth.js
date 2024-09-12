const jwt = require("jsonwebtoken");
const { unauthenticatedError } = require("../errors");

const authenticationmiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new unauthenticatedError("No token provided");
  }
  //get token
  const token = authHeader.split(" ")[1];

  //verification
  try {
    //decode is: id,username, issuedAt, and expiration
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id, username } = decoded;
    req.user = { id, username };
    next();
  } catch (error) {
    throw new unauthenticatedError("Not authorized to access this route");
  }
};

module.exports = authenticationmiddleware;
