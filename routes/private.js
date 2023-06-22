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
  {
    path: `${version}/job`,
    controllers: require("../controllers/Users").addJob,
    validator: require("../controllers/Users/validator").job, // global validator
    method: "post",
    cache: false,
  },
  {
    path: `${version}/job/:id`,
    controllers: require("../controllers/Users").deleteJob,
    method: "delete",
    cache: false,
  },
];
