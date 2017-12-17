const express = require('express');
const app = express();

const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//mongoose.connect(config.database, { useMongoClient: true });

//Middleware for CORS
app.use(cors());

//Middleware for bodyparsing using both json and urlencoding
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

/*express.static is a built in middleware function to serve static files.
 We are telling express server public folder is the place to look for the static files
*/
//app.use(express.static(path.join(__dirname, 'public')));

//app.use('https://radiant-sands-62105.herokuapp.com/bucketlist', bucketlist_controller);

app.use((err, req, res, next) => {
	res.status(422).send({error: err.message})
})

module.exports = app;