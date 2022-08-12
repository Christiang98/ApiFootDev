const mongoose = require('mongoose')

const { Schema } = mongoose

const playerModel = new Schema({
  firstName: { type: String, required: true, minLength: 3, maxLength: 30 },
  lastName: { type: String, required: true, minLength: 3, maxLength: 30 },
  global: {type:Number,required: true,unique: true},
  nationality: { type: String, required: true ,unique: true},
  team: { type: String, required: true, unique: true },
 })

module.exports = mongoose.model('Player',playerModel)
