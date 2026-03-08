const Joi = require("joi");

const UserValidation = Joi.object({
  name: Joi.string().min(3).trim().required(),
  email: Joi.string().email().trim().required(),
  password: Joi.string().min(6).required(),
});

module.exports = UserValidation;