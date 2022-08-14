const Joi = require('joi')

const schema = Joi.object({
    name:  Joi.string().min(3).max(30).trim().required(),
    username:  Joi.string().min(3).max(30).trim().required(),
    stadium: Joi.string().min(3).max(30).trim().required(),
    alinement: Joi.string().min(3).max(30).trim().required(),
    player1: Joi.string().min(3).max(30).trim().required(),
    player2: Joi.string().min(3).max(30).trim().required(),
    player3: Joi.string().min(3).max(30).trim().required(),
    player4: Joi.string().min(3).max(30).trim().required(),
    player5: Joi.string().min(3).max(30).trim().required()
 })

module.exports = schema
