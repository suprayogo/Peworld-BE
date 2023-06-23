const cloudinary = require("cloudinary");

cloudinary.v2.config({
  cloud_name: "infomediaon5",
  api_key: "349237237622967",
  api_secret: "j_WjXliM4n4DA442p86LZu0WZz8",
});

module.exports = cloudinary;
