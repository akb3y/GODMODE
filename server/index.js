const path = require('path');
const express = require('express');
require('dotenv').config();
const { getGames, favoriteGame } = require('./db/index.js')

const app = express();
const PORT = process.env.PORT;

app.use(express.static(path.join(__dirname, '..', 'dist')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/games', (req, res) => {
  const params = {
    age: req.query.age,
    players: req.query.players}
  getGames(params, (err, result) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(result);
    }
  })
});

app.put('/favorite', (req, res) => {
  const params = {
    id: req.query.id,
    favorite: req.body.favorite
  };
  console.log('server side: ', params)
    favoriteGame(params, (err, result) => {
      if (err) {
        res.status(400).send(err);
      } else {
        console.log(result);
        res.status(201).send(result)
      }
    })
});

app.listen(PORT, (err) => {
  if(err){
    console.error("Error in express: ", err);
  }else {
    console.log(`Listening on port ${PORT}`);
  }
  }) ;