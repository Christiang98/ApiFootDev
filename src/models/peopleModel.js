const mongoose = require('mongoose')

const { Schema } = mongoose

const peopleModel = new Schema({
  firstName: { type: String, required: true, minLength: 3, maxLength: 30 },
  lastName: { type: String, required: true, minLength: 3, maxLength: 30 },
  username: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 30,
    unique: true
  },
  myClub:{ type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  
})

module.exports = mongoose.model('People', peopleModel)
