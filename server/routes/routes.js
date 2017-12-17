var express = require('express');
var router = express.Router();
const User = require('./../models/user');
const UserController = require('./../controllers/users_controller');

// Home page route
router.get('/', function (req, res) {
	console.log('works')

})

// About page route
router.post('/register/', UserController.create)

module.exports = router;