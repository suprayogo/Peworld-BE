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
  {
    path: `${version}/job`,
    controllers: require("../controllers/Users").getAccountList,
    method: "get",
  },
  {
    path: `${version}/job/filter`,
    controllers: require("../controllers/Users").filterAccountList,
    method: "get",
  },
  {
    path: `${version}/job/all`,
    controllers: require("../controllers/Users").getAllAccount,
    method: "get",
  },
  {
    path: `${version}/job/detail/:id`,
    controllers: require("../controllers/Users").getAccountById,
    method: "get",
  },
];
