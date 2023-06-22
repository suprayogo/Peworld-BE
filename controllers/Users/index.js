const model = require("../../models");
const jwt = require("jsonwebtoken");

module.exports = {
  // get users
  getProfile: async (req, res) => {
    try {
      const authorization = req.headers.authorization.slice(6).trim();
      const { id } = jwt.verify(authorization, process.env.APP_SECRET_KEY);

      const request = await model.users.findOne({
        where: { id },
      });

      res.status(200).json({
        status: "OK",
        messages: "Get profile success",
        data: request,
      });
    } catch (error) {
      res.status(error?.code ?? 500).json({
        status: "ERROR",
        messages: error?.message ?? "Something wrong in our server",
        data: null,
      });
    }
  },
  // edit users
  editProfile: async (req, res) => {
    try {
      const requestBody = req.body;

      const authorization = req.headers.authorization.slice(6).trim();
      const { id } = jwt.verify(authorization, process.env.APP_SECRET_KEY);

      const payload = {
        fullname: requestBody?.fullname,
        company: requestBody?.company,
        job_title: requestBody?.job_title,
        phone: requestBody?.phone,
        description: requestBody?.description,
        domicile: requestBody?.domicile,
      };

      await model.users.update(payload, {
        where: { id },
      });

      res.status(200).json({
        status: "OK",
        messages: "Edit profile success",
        data: payload,
      });
    } catch (error) {
      res.status(error?.code ?? 500).json({
        status: "ERROR",
        messages: error?.message ?? "Something wrong in our server",
        data: null,
      });
    }
  },
  addSkills: async (req, res) => {
    try {
      const requestBody = req.body;

      const authorization = req.headers.authorization.slice(6).trim();
      const { id } = jwt.verify(authorization, process.env.APP_SECRET_KEY);

      const request = await model.users.findOne({
        where: { id },
      });

      const skills = request.dataValues.skills;

      const payload = {
        skills: [...skills, ...requestBody?.skills],
      };

      await model.users.update(payload, {
        where: { id },
      });

      res.status(200).json({
        status: "OK",
        messages: "Add Skills Success",
        data: req.body,
      });
    } catch (error) {
      res.status(error?.code ?? 500).json({
        status: "ERROR",
        messages: error?.message ?? "Something wrong in our server",
        data: null,
      });
    }
  },
  deleteSkills: async (req, res) => {
    try {
      const deleteId = req.params.id;

      const authorization = req.headers.authorization.slice(6).trim();
      const { id } = jwt.verify(authorization, process.env.APP_SECRET_KEY);

      const request = await model.users.findOne({
        where: { id },
      });

      if (!request.dataValues.skills[deleteId]) {
        throw {
          message: "Skills id not found",
          code: 400,
        };
      }

      let skills = request.dataValues.skills;

      skills = skills.filter((item, key) => key != deleteId);

      await model.users.update(
        { skills },
        {
          where: { id },
        }
      );

      res.status(200).json({
        status: "OK",
        messages: "Delete Skills Success",
        data: skills,
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
