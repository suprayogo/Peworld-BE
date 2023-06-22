module.exports = {
  editProfile: {
    fullname: "required|string|maxLength:50",
    company: "required|string|maxLength:20",
    job_title: "required|string|maxLength:20",
    phone: "required|string|maxLength:20|phoneNumber",
    description: "required|string|minLength:10|maxLength:100",
    domicile: "required|string|maxLength:40",
  },
  skills: {
    skills: "required|array|arrayUnique",
  },
};
