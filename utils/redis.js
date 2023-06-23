require("dotenv").config();
const Redis = require("ioredis");

let redis;

redis = new Redis({
  username: "default", // Render Redis name, red-xxxxxxxxxxxxxxxxxxxx
  host: "containers-us-west-71.railway.app", // Render Redis hostname, REGION-redis.render.com
  password: "Mz51ptUPntXMdzN1pMvN", // Provided password
  port: 7752, // Connection port
  tls: true, // TLS required when externally connecting to Render Redis
  autoResubscribe: false,
});

module.exports = redis;
