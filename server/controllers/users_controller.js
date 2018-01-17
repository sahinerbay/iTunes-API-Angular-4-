const User = require('./../models/user');
const bcrypt = require('bcrypt');

module.exports = {

	create(req, res, next) {

		if (req.body.email &&
			req.body.fullname &&
			req.body.password) {

			const userProps = req.body;

			//use schema.create to insert data into the db
			User.create(userProps)
				.then(user => {
					req.session.userId = user._id;
					req.session.save();
					res.json({
						"code": "201",
						"status": "success",
						"message": "User successfully registered!"
					})
				})
				.catch(error => {
					if (error.name === 'MongoError' && error.code === 11000) {
						// Duplicate username
						return res.json({
							"code": "103",
							"status": "failed",
							"message": "Email is already registered!"
						})
					}
					next();
				})
		}
	},

	login(req, res, next) {
		const userProps = req.body;
		User.findOne({ email: userProps.email })
			.then(user => {
				if (!user) {
					return res.json({
						"code": "101",
						"status": "failed",
						"message": "Email not found."
					});
				}
				bcrypt.compare(req.body.password, user.password)
					.then(result => {
						if (result === true) {
							req.session.userId = user._id;
							req.session.loggedIn = true;
							req.session.save();
							res.json({
								"status": "success",
								"message": "User is successfully logged-in."
							})
						}
						else {
							return res.json({
								"code": "102",
								"status": "failed",
								"message": "User password incorrect."
							})
						}

					})
					.catch(next)

			})
			.catch(next)
	},

	auth(req, res, next) {
		console.log('auth auth' + req.session.userId)
		User.findById(req.session.userId)
			.then(user => {
				if (!user) {
					res.status(400).json({
						"status": "failed",
						"message": "Not authorized! Go back!",
						"auth": false
					})
				} else {
					res.json({
						"status": "success",
						"message": "User logged-in!",
						"auth": true
					})
				}

			})
			.catch(next)
	},

	logout(req, res, next) {
		//req.session.userId = undefined WHY?
		if (req.session.userId) {
			// delete session object
			req.session.destroy(function () {
				res.clearCookie('connect.sid', { path: '/' });
			});
		} else {
			console.log('userId not found')
		}
	}

}