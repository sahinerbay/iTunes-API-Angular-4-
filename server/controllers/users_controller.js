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
						"status": "failed",
						"message": "User not found."
					});
				}

				bcrypt.compare(req.body.password, user.password)
					.then(result => {

						req.session.userId = user._id;
						req.session.save();
						return req.session;

					})
					.then(session => {
						console.log(session);
						session.save();
						res.send(session)
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
	}

}