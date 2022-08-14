const mongoose = require('mongoose')

const { Schema } = mongoose

const clubModel = new Schema({
    name: { type: String, required: true, minLength: 3, maxLength: 30 },
    league: { type: String, required: true, minLength: 3, maxLength: 30 },
    technicalDirector: {type: String,required: true,minLength: 3,maxLength: 30,},
    stadium:{ type: String, required: true, minLength: 3, maxLength: 30},
    alinement: { type: String, required: true, minLength: 3, maxLength :6},
  })
  
  module.exports = mongoose.model('Club', clubModel)