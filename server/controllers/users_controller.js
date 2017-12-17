const User = require('./../models/user');

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
				})
				.catch(next)
		}
	}

}