require("dotenv").config();
const model = require("../../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const bcryptSalt = bcrypt.genSaltSync(10);

module.exports = {
  // post auth/login
  login: async (req, res) => {
    try {
      const requestBody = req.body;

      const checkEmail = await model.users.findOne({
        where: { email: requestBody.email },
      });

      if (!checkEmail) {
        throw {
          message: "Email is not registered",
          code: 400,
        };
      }

      const compare = await bcrypt.compare(
        requestBody?.password,
        checkEmail?.dataValues?.password
      );

      if (!compare) {
        throw {
          message: "Incorrect Password",
          code: 400,
        };
      }

      const token = jwt.sign(checkEmail.dataValues, process.env.APP_SECRET_KEY);

      res.status(200).json({
        status: "OK",
        messages: "Login success",
        data: {
          token,
          user: checkEmail
        },
      });
    } catch (error) {
      res.status(error?.code ?? 500).json({
        status: "ERROR",
        messages: error?.message ?? "Something wrong in our server",
        data: null,
      });
    }
  },

  // post auth/register
  register: async (req, res) => {
    try {
      const requestBody = req.body;

      const checkEmail = await model.users.findOne({
        where: { email: requestBody.email },
      });

      if (checkEmail) {
        throw {
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

      const rndInt = randomIntFromInterval(0, 5)

      await model.users.create({
        ...requestBody,
        password: hashPassword,
        photo: photo[rndInt],
      });

      res.status(200).json({
        status: "OK",
        messages: "Insert success",
        data: null,
      });
    } catch (error) {
      res.status(error?.code ?? 500).json({
        status: "ERROR",
        messages: error?.message ?? "Something wrong in our server",
        data: null,
      });
    }
  },
};
