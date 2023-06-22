require("dotenv").config();
const redis = require("./redis");

function setRedis(url, data, ms) {
  if (process.env.REDIS) {
    return redis.set(url, data, "EX", ms || 100);
  } else {
    return null;
  }
}

module.exports = setRedis;
