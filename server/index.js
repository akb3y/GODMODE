const express = require('express');
require('dotenv').config();
const path = require('path')

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '..', 'dist')));

app.listen(PORT, (err) => {
  if(err){
    console.error("Error in express: ", err);
  }else {
    console.log(`Listening on port ${PORT}`);
  }
  }) ;