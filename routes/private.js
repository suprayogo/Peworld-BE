const version = "/v1";

module.exports = [
  {
    path: `${version}/profile`,
    controllers: require("../controllers/Users").getProfile,
    method: "get",
    cache: false,
  },
  {
    path: `${version}/profile`,
    controllers: require("../controllers/Users").editProfile,
    validator: require("../controllers/Users/validator").editProfile, // global validator
    method: "patch",
    cache: false,
  },
  {
    path: `${version}/skills`,
    controllers: require("../controllers/Users").addSkills,
    validator: require("../controllers/Users/validator").skills, // global validator
    method: "post",
    cache: false,
  },
  {
    path: `${version}/skills/:id`,
    controllers: require("../controllers/Users").deleteSkills,
    method: "delete",
    cache: false,
  },
];
