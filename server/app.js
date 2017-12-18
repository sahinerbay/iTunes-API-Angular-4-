const express = require('express');
const app = express();
const routes = require('./routes/routes');
var session = require('express-session');
//const cookieParser = require('cookie-parser');
var MongoStore = require('connect-mongo')(session);

const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const mongoose = require('mongoose');
const config = require('./config/database');

mongoose.Promise = global.Promise;
mongoose.connect(config.database, { useMongoClient: true })
	.then(() => console.log('connected'))
	.catch(error => console.log(error))

//Middleware for CORS
app.use(cors());
//app.use(cookieParser());

app.use(session({
	secret: 'work hard',
	resave: true,
	saveUninitialized: true,
	store: new MongoStore({ mongooseConnection: mongoose.connection })
}));

//Middleware for bodyparsing using both json and urlencoding
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



// Enable CORS from client-side
// app.use(function (req, res, next) {
//  	res.setHeader("Access-Control-Allow-Origin", "*");
//  	res.setHeader('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
//  	res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
// 	res.setHeader("Access-Control-Allow-Credentials", "true");
// 	next();
// });

/*express.static is a built in middleware function to serve static files.
 We are telling express server public folder is the place to look for the static files
*/
//app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', routes);
app.use((err, req, res, next) => {
	res.status(422).send({ error: err.message })
})

module.exports = app;