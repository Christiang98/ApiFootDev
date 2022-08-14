const mongoose = require('mongoose')

const { Schema } = mongoose

const newClubModel = new Schema({
    name: { type: String, required: true, minLength: 3, maxLength: 30 },
    username: {type: String,required: true, minLength: 3,maxLength: 30, },
    stadium:{ type: String, required: true, minLength: 3, maxLength: 30},
    alinement:{ type: String, required: true, minLength: 3, maxLength :6},
    player1:{ type: String, required: true, minLength: 3, maxLength: 30},
    player2:{ type: String, required: true, minLength: 3, maxLength: 30},
    player3:{ type: String, required: true, minLength: 3, maxLength: 30},
    player4:{ type: String, required: true, minLength: 3, maxLength: 30},
    player5:{ type: String, required: true, minLength: 3, maxLength: 30}
  })
  
  module.exports = mongoose.model('My Club', newClubModel)