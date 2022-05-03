const mongoose = require('mongoose');

mongoose.connect(`mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`, )
.catch(err => console.log(err))
.then(res => console.log('You are connected to Mongoose!'));
