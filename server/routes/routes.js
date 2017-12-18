var express = require('express');
var router = express.Router();
const User = require('./../models/user');
const UserController = require('./../controllers/users_controller');

router.use('/', (req,res,next)=> {
	if(req.session && req.session.userId) {
		console.log(req.sessionID)
	}
	next();
})


// About page route
router.post('/register/', UserController.create);
router.post('/login/', UserController.login);

// Home page route
router.get('/check/', );




module.exports = router;