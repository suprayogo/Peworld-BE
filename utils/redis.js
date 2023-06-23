require("dotenv").config();
const Redis = require("ioredis");

let redis;

// redis = new Redis({
//   username: "red-ciadfjd9aq007t874t9g", // Render Redis name, red-xxxxxxxxxxxxxxxxxxxx
//   host: "singapore-redis.render.com", // Render Redis hostname, REGION-redis.render.com
//   password: "euWdMejw2ob56grUpjT4cfN8w0EyO49B", // Provided password
//   port: 6379, // Connection port
//   tls: true, // TLS required when externally connecting to Render Redis
//   autoResubscribe: false,
// });

redis = new Redis("redis://red-ciadfjd9aq007t874t9g:6379");

module.exports = redis;
