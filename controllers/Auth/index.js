require("dotenv").config();
const model = require("../../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const bcryptSalt = bcrypt.genSaltSync(10);
const redis = require("../../utils/redis");

module.exports = {
  // post auth/login
  login: async (req, res) => {
    try {
      let checkEmail,
        cache = false;
      const requestBody = req.body;
      const checkRedis = await redis.get(requestBody.email);

      if (checkRedis && checkRedis !== "null") {
        cache = true;
        checkEmail = { dataValues: JSON.parse(checkRedis) };
      } else {
        checkEmail = await model.users.findOne({
          where: { email: requestBody.email },
        });

        redis.set(requestBody.email, JSON.stringify(checkEmail), "EX", 60);
      }

      if (!checkEmail) {
        throw { cache, message: "Email is not registered", code: 400 };
      }

      const compare = await bcrypt.compare(
        requestBody?.password,
        checkEmail?.dataValues?.password
      );

      if (!compare) {
        throw { cache, message: "Incorrect Password", code: 400 };
      }

      const token = jwt.sign(checkEmail.dataValues, process.env.APP_SECRET_KEY);

      res.status(200).json({
        cache,
        status: "OK",
        messages: "Login success",
        data: {
          token,
          user: checkEmail,
        },
      });
    } catch (error) {
      res.status(error?.code ?? 500).json({
        cache: error?.cache,
        status: "ERROR",
        messages: error?.message ?? "Something wrong in our server",
        data: null,
      });
    }
  },

  // post auth/register
  register: async (req, res) => {
    try {
      let checkEmail,
        cache = false;
      const requestBody = req.body;
      const checkRedis = await redis.get(requestBody.email);

      if (checkRedis && checkRedis !== "null") {
        cache = true;
        checkEmail = { dataValues: JSON.parse(checkRedis) };
      } else {
        checkEmail = await model.users.findOne({
          where: { email: requestBody.email },
        });

        redis.set(requestBody.email, JSON.stringify(checkEmail), "EX", 60);
      }

      if (checkEmail) {
        throw {
          cache,
          message: "Email is already registered",
          code: 400,
        };
      }

      const hashPassword = await bcrypt.hash(requestBody.password, bcryptSalt);
      const photo = [
        "https://www.w3schools.com/howto/img_avatar.png",
        "https://www.w3schools.com/howto/img_avatar2.png",
        "https://www.w3schools.com/w3images/avatar2.png",
        "https://www.w3schools.com/w3images/avatar6.png",
        "https://www.w3schools.com/w3images/avatar5.png",
      ];

      function randomIntFromInterval(min, max) {
        // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min);
      }

      const rndInt = randomIntFromInterval(0, 5);

      await model.users.create({
        ...requestBody,
        password: hashPassword,
        photo: photo[rndInt],
        role: (requestBody.role ?? "user").trim().toLowerCase(),
      });

      res
        .status(200)
        .json({ cache, status: "OK", messages: "Insert success", data: null });
    } catch (error) {
      res.status(error?.code ?? 500).json({
        cache: error?.cache,
        status: "ERROR",
        messages: error?.message ?? "Something wrong in our server",
        data: null,
      });
    }
  },
};
