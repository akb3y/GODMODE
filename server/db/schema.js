const mongoose = require('mongoose')

let gamesSchema = new mongoose.Schema({
  name: {type: String, required: true},
  price: {type: Number, required: true},
  min_players: {type: Number, required: true},
  max_players: {type: Number, required: true},
  min_playtime: {type: Number, required: true},
  max_playtime: {type: Number, required: true},
  description_preview: {type: String, required: true},
  images: {
    small: {type: String, required: true},
  },
  average_user_rating: {type: Number, required: true},
  players: {type: String, required: true},
  playtime: {type: String, required: true},
  price_text: {type: String, required: true},
  min_age: {type: Number, required: true},
  rank: Number,
})

module.exports = { gamesSchema };