const User = require('./../models/user');
const bcrypt = require('bcrypt');

module.exports = {

	create(req, res, next) {

		if (req.body.email &&
			req.body.username &&
			req.body.password) {

			const userProps = req.body;

			//use schema.create to insert data into the db
			User.create(userProps)
				.then(user => {
					console.log('user is registered');
					console.log(user)
					req.session.userId = user._id;
					console.log(req.session.userId)
				})
				.catch(next)
		}
	},

	login(req, res, next) {
		const userProps = req.body;
		User.findOne({ email: userProps.email })
			.then(user => {
				if (!user) {
					res.json({
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
							return req.session;
						}
						else {
							res.json({
								"code":"102",
								"status": "failed",
								"message": "User password incorrect."
							})
						}

					})
					.then(session => {
						session.save();
						res.json({
							"status": "success",
							"message": "<div>User is successfully logged-in.</div>"
						})
					})
					.catch(next)

			})
			.catch(next)
	},

	auth(req, res, next) {
		console.log(req.session)
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
		console.log('logout')
		console.log(req.session)
		if (req.session) {
			// delete session object
			req.session.destroy(function (err) {
				if (err) {
					return next(err);
				} else {
					return res.send('token deleted')
				}
			});
		}
	}

}