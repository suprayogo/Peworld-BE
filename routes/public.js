const version = "/v1";

module.exports = [
  {
    path: `${version}/auth/login`,
    controllers: require("../controllers/Auth").login,
    validator: require("../controllers/Auth/validator").loginValidator, // global validator
    method: "post",
  },
  {
    path: `${version}/auth/register`,
    controllers: require("../controllers/Auth").register,
    validator: require("../controllers/Auth/validator").register, // global validator
    method: "post",
  },
];
