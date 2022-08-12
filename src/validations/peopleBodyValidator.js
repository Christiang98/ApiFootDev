const Joi = require('joi')

const schema = Joi.object({
  firstName: Joi.string().alphanum().min(3).max(30).trim().required(),
  lastName: Joi.string().alphanum().min(3).max(30).trim().required(),
  username: Joi.string().min(6).max(16).required(),
  myClub:Joi.string().min(3).max(40).required(),
  password: Joi.string().required(),
  email: Joi.string().email().required(),
 })

module.exports = schema
