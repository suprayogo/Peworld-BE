module.exports = {
  loginValidator: {
    email: "required|email",
    password: "required",
  },
  register: {
    email: "required|email|maxLength:50",
    password: "required|minLength:8",
    fullname: "required|string|maxLength:50",
    company: "required|string|maxLength:20",
    job_title: "required|string|maxLength:20",
    phone: "required|string|maxLength:20|phoneNumber",
  },
};
