
const mongoose = require('mongoose');
require('dotenv').config();

const { gamesSchema } = require('./schema.js');

mongoose.connect(`mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`, )
.catch(err => console.log(err))
.then(res => console.log('You are connected to Mongoose!'));

const Boardgame = mongoose.model('Boardgame', gamesSchema)

const getGames = (params, callback) => {
  console.log(params)
  Boardgame.find({min_age: { $lte: params.age}, min_players: {$lte: params.players}, max_players: {$gte: params.players}}, (err, results) => {
    if (err) callback(err, null);
    else callback(null, results)
  })
}

module.exports = { getGames, Boardgame }