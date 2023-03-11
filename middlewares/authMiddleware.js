const jwt = require('jsonwebtoken');
const dotenv = require('dotenv'); // import dotenv

dotenv.config(); // load environment variables from .env file

const secret = process.env.JWT_SECRET; // get JWT_SECRET from environment variables

function authMiddleware(req, res, next) {
  // get token from headers
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Authentication failed. Token not provided.' });
  }

  try {
    // verify token
    const decodedToken = jwt.verify(token, secret);

    // attach decoded user to request object
    req.user = decodedToken;

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Authentication failed. Invalid token.' });
  }
}

module.exports = authMiddleware;