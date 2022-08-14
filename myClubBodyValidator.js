const Joi = require('joi')

const schema = Joi.object({
    name:  Joi.string().alphanum().min(3).max(30).trim().required(),
    technicalDirector:  Joi.string().alphanum().min(3).max(30).trim().required(),
    stadium: Joi.string().alphanum().min(3).max(30).trim().required(),
    alinement: Joi.string().alphanum().min(3).max(30).trim().required(),
    player1: Joi.string().alphanum().min(3).max(30).trim().required(),
    player2: Joi.string().alphanum().min(3).max(30).trim().required(),
    player3: Joi.string().alphanum().min(3).max(30).trim().required(),
    player4: Joi.string().alphanum().min(3).max(30).trim().required(),
    player5: Joi.string().alphanum().min(3).max(30).trim().required()
 })

module.exports = schema
