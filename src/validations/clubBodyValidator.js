const Joi = require('joi')

const schema = Joi.object({
    name:  Joi.string().min(3).max(30).required(),
    league:  Joi.string().min(3).max(30).required(),
    technicalDirector: Joi.string().min(3).max(30).required(),
    stadium: Joi.string().min(3).max(30).required(),
    alinement: Joi.string().min(3).max(6).required()
})

module.exports = schema