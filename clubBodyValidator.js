const Joi = require('joi')

const schema = Joi.object({
    name:  Joi.string().alphanum().min(3).max(30).trim().required(),
    league:  Joi.string().alphanum().min(3).max(30).trim().required(),
    technicalDirector: Joi.string().alphanum().min(3).max(30).trim().required(),
    stadium: Joi.string().alphanum().min(3).max(30).trim().required(),
    alinement: Joi.string().alphanum().min(3).max(6).trim().required()
})

module.exports = schema