const axios = require("axios");
const { Boardgame } = require('./index.js')

const API_URL = `https://${process.env.API_HOST}/api/search?order_by=rank&limit=100&skip=900&client_id=${process.env.API_KEY}`;

const getGames = () =>
  axios
    .get(API_URL)
    .then((response) => {
        Boardgame.insertMany(response.data.games, {ordered: false}, (err, results) => {
          if(err) console.error(err)
          else console.log(results)
        })
   })
    .catch((err) => err);

  getGames()