const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const locationRoutes = require('./routes/location');
const authMiddleware = require('./middlewares/authMiddleware'); // import authMiddleware
const morgan = require("morgan");
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use(morgan("dev"));


// Routes
app.use('/api', locationRoutes);

// tambahkan diatas setelah api , authMiddleware

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: process.env.ERROR500 });
});

module.exports = app;