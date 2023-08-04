require("dotenv").config();
const Redis = require("ioredis");

let redis;

redis = new Redis({
  username: "default", // Render Redis name, red-xxxxxxxxxxxxxxxxxxxx
  host: "containers-us-west-39.railway.app", // Render Redis hostname, REGION-redis.render.com
  password: "wTUWTkvmOLOJykzy2iWl", // Provided password
  port: 5865, // Connection port
  autoResubscribe: false,
  maxRetriesPerRequest: 5,
});

module.exports = redis;
