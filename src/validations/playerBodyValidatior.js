const Joi = require('joi')

const playerSchema = Joi.object({
  firstName: Joi.string().alphanum().min(3).max(30).trim().required(),
  lastName: Joi.string().alphanum().min(3).max(30).trim().required(),
  global: Joi.number().integer().min(45).max(99).required(),
  nationality: Joi.string().alphanum().min(3).max(30).trim().required(),
  team: Joi.string().min(3).max(30).trim().required()
})

module.exports = playerSchema