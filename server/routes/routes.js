var express = require('express');
var router = express.Router();
const User = require('./../models/user');
const UserController = require('./../controllers/users_controller');



// About page route
router.post('/register/', UserController.create);
router.post('/login/', UserController.login);

// Home page route
router.get('/logout/', UserController.logout);




module.exports = router;