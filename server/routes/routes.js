var express = require('express');
var router = express.Router();

const UserController = require('./../controllers/users_controller');
const FavoriteController = require('./../controllers/favorites_controller');


router.post('/favorites/', FavoriteController.add);

// About page route
router.post('/register/', UserController.create);
router.post('/login/', UserController.login);

// Home page route
router.post('/logout/', UserController.logout);




module.exports = router;