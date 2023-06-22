module.exports = {
  editProfile: {
    fullname: "required|string|maxLength:50",
    company: "required|string|maxLength:20",
    job_title: "required|string|maxLength:20",
    phone: "required|string|maxLength:20|phoneNumber",
    description: "required|string|minLength:10|maxLength:100",
    domicile: "required|string|maxLength:40",
  },
  job: {
    position: "required|string|maxLength:30",
    company: "required|string|maxLength:20",
    date: "required|dateFormat:MM-YYYY|maxLength:20",
    description: "required|string|minLength:10|maxLength:100",
  },
  skills: {
    skills: "required|array|arrayUnique",
  },
  contact: {
    subject: "required|string|maxLength:50",
    description: "required|string|maxLength:200",
  },
};
