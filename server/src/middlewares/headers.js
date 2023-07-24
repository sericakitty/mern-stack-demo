const config = require("../utils/config");

const corsMiddleware = (_req, res, next) => {
  res.header("Access-Control-Allow-Origin", config.ALLOWED_ORIGINS);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  }

module.exports = corsMiddleware;